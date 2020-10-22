import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'lodash';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { ResourceService } from '../../services/resource.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { UploadUsersCsvFormComponent } from '../upload-users-csv-form/upload-users-csv-form.component';
import { FormControl } from '@angular/forms';
import { pick } from 'lodash';
import { USER_ROLES, BRANCH_LIST, DESIGNATION_LIST, DISTRICT_VIDHAN_MAP } from 'src/app/constants';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { LoginHistoryComponent } from '../login-history/login-history.component';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

const arrayToCSV = (objArray) => {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  let str = `${Object.keys(array[0]).map(value => `"${value}"`).join(",")}` + '\r\n';

  return array.reduce((str, next) => {
    str += `${Object.values(next).map(value => `"${value}"`).join(",")}` + '\r\n';
    return str;
  }, str);
}

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  @Input() resourceUrl: string = '/users';
  @Input() type: 'user-management' | 'messages' = 'user-management';
  @Input() selection;
  environment = environment;
  classMap;
  classList;
  displayRoles;
  keys;

  isMessage =false;
  isSuperAdmin = false;

  branchList = BRANCH_LIST;
  designationList = DESIGNATION_LIST;
  districtMap = DISTRICT_VIDHAN_MAP;
  districtList = Reflect.ownKeys(DISTRICT_VIDHAN_MAP);
  vidhanSabhaList = [];
  


  nameFilter = new FormControl('');
  roleFilter = new FormControl('');
  branchFilter = new FormControl('');
  designationFilter = new FormControl('');
  districtFilter = new FormControl('');
  vidhanSabhaFilter = new FormControl('');

  filterValues = {
    name: '',
    role: '',
    branch: '',
    designation: '',
    district: '',
    vidhanSabha: ''
  };
  
  constructor(
    private resourceService: ResourceService,
    private authService: AuthService,
    private alertService: AlertService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    this.isMessage = this.type == "messages"? true : false;
    const loggedInUserRole = this.authService.getLogginedUserRole();
    this.isSuperAdmin = loggedInUserRole === 'SUPER_ADMIN';

    this.displayRoles = loggedInUserRole === 'SUPER_ADMIN' ? pick(USER_ROLES, ['ADMIN']) : pick(USER_ROLES, filter(Reflect.ownKeys(USER_ROLES), (role) => !(role === 'ADMIN' || role === 'SUPER_ADMIN')));
    this.keys = Reflect.ownKeys(this.displayRoles);

    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.bindFilterListeners();

    this.displayedColumns = [
      ...(this.isMessage? ['select'] : []),
      'name',
      'branch',
      'designation',
      'district',
      'vidhansabha',
      'userName',
      'email',
      'mobileNumber',
      'role',
      ...(!this.isMessage? ['createdAt'] : []),
      ...(!this.isMessage? ['updatedAt'] : []),
      ...(!this.isMessage? ['action'] : []),
    ];
    this.resetList(list['data']);
    this.dataSource.filterPredicate = this.createFilter();
  }

  bindFilterListeners() {
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name || '';
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.roleFilter.valueChanges
      .subscribe(
        id => {
          this.filterValues.role = id || '';
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.branchFilter.valueChanges
      .subscribe(
        branch => {
          this.filterValues.branch = branch || '';
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.designationFilter.valueChanges
      .subscribe(
        designation => {
          this.filterValues.designation = designation || '';
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.districtFilter.valueChanges
      .subscribe(
        district => {
          this.filterValues.district = district || '';
          this.vidhanSabhaList = this.districtMap[district]? this.districtMap[district].map(i => i.Vidhansabha) : [];
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.vidhanSabhaFilter.valueChanges
      .subscribe(
        vidhanSabha => {
          this.filterValues.vidhanSabha = vidhanSabha || '';
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.name.toLowerCase().indexOf(searchTerms.name.toLowerCase()) !== -1
        && data.role.toString().toLowerCase().indexOf(searchTerms.role.toLowerCase()) !== -1
        && data.branch.toLowerCase().indexOf(searchTerms.branch.toLowerCase()) !== -1
        && data.designation.toLowerCase().indexOf(searchTerms.designation.toLowerCase()) !== -1
        && data.district.toLowerCase().indexOf(searchTerms.district.toLowerCase()) !== -1
        && data.vidhansabha.toLowerCase().indexOf(searchTerms.vidhanSabha.toLowerCase()) !== -1
    }
    return filterFunction;
  }

  async reFetchResourceList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.resetList(list['data']);
  }

  resetList(users) {
    const filteredUsers = this.filterBasedOnRole(users);
    this.dataSource = new MatTableDataSource(filteredUsers);
    this.dataSource.paginator = this.paginator;
  }

  filterBasedOnRole(users) {
    const logginedUserRole = this.authService.getLogginedUserRole();
    const filterOption = logginedUserRole === 'SUPER_ADMIN'
      ? { 'role': 'ADMIN' }
      : (user) => !(user.role == 'ADMIN' || user.role == 'SUPER_ADMIN');
    // return filter(users, );
    return filter(users, filterOption);
  }

  getClassName(classId) {
    console.log(this.classMap[classId]);
    return this.classMap.get(classId) || 'Class has been deleted';
  }

  onUploadCSV() {

    const dialogRef = this.dialog.open(UploadUsersCsvFormComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reFetchResourceList();
    });

  }

  onExportCSV() {
    console.log(this.dataSource.filteredData);
    const toPick = ['name', 'branch', 'designation', 'district', 'vidhansabha', 'username', 'email', 'mobileNumber', 'role', 'createdAt'];
    const toExport = this.dataSource.filteredData
      .map(user => {
        const uObj = pick(user, toPick);
        return {
          ...uObj,
          createdAt: moment(uObj.createdAt).format('MMM DD, YYYY')
        }
      });

    const csv = arrayToCSV(toExport),
      a = document.createElement('a');
    a.textContent = 'download';
    a.download = "users.csv";
    a.href = 'data:text/csv;charset=utf-8,' + escape(csv);
    // document.body.appendChild(a);
    a.click();
  }

  showLoginHistory(element) {
    const dialogRef = this.dialog.open(LoginHistoryComponent, {
      width: '600px',
      data: {
        user: element
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.reFetchResourceList();
    // });
  }

  onChangePassword(element) {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '600px',
      data: {
        user: element
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.reFetchResourceList();
    // });
  }

  openDialogue(user) {
    const dialogRef = this.dialog.open(CreateUserFormComponent, {
      width: '600px',
      data: {
        resourceUrl: this.resourceUrl,
        classList: this.classList,
        user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reFetchResourceList();
    });
  }

  onPasswordChange(user) {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '600px',
      data: {
        user
      }
    });
  }

  onAddResource() {
    const user = {
      _id: '',
      name: '',
      mobileNumber: '',
      class: '',
      'branch': '',
      'designation': '',
      'district': '',
      'vidhansabha': '',
      isSubscribed: ''
    };
    this.openDialogue(user);
    
  }

  onUpdate() {
    this.reFetchResourceList();
  }

  async onDelete(resource) {
    await this.resourceService.delete(this.resourceUrl, resource).toPromise();
    this.reFetchResourceList();
  }

  async onEdit(element) {
    this.openDialogue(element);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
