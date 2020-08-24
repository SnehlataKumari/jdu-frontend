import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'lodash';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { ResourceService } from '../../services/resource.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UploadUsersCsvFormComponent } from '../upload-users-csv-form/upload-users-csv-form.component';
import { FormControl } from '@angular/forms';
import { pick } from 'lodash';
import { USER_ROLES, BRANCH_LIST, DESIGNATION_LIST, DISTRICT_VIDHAN_MAP } from 'src/app/constants';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() resourceUrl: string = '/users';
  @Input() users;

  classMap;
  classList;
  displayRoles;
  keys;

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
    public dialog: MatDialog
  ) { }

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {

    const loggedInUserRole = this.authService.getLogginedUserRole();
    this.displayRoles = loggedInUserRole === 'SUPER_ADMIN' ? pick(USER_ROLES, ['ADMIN']) : pick(USER_ROLES, filter(Reflect.ownKeys(USER_ROLES), (role) => !(role === 'ADMIN' || role === 'SUPER_ADMIN')));
    this.keys = Reflect.ownKeys(this.displayRoles);

    this.resetList(this.users);
    this.bindFilterListeners();

    this.displayedColumns = [
      'name',
      'branch',
      'designation',
      'district',
      'vidhansabha',
      'userName',
      'email',
      'mobileNumber',
      'role',
    ];
    
    this.dataSource.filterPredicate = this.createFilter();
  }

  bindFilterListeners() {
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.roleFilter.valueChanges
      .subscribe(
        id => {
          this.filterValues.role = id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.branchFilter.valueChanges
      .subscribe(
        branch => {
          this.filterValues.branch = branch;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.designationFilter.valueChanges
      .subscribe(
        designation => {
          this.filterValues.designation = designation;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.districtFilter.valueChanges
      .subscribe(
        district => {
          this.filterValues.district = district;
          this.vidhanSabhaList = this.districtMap[district].map(i => i.Vidhansabha);
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.vidhanSabhaFilter.valueChanges
      .subscribe(
        vidhanSabha => {
          this.filterValues.vidhanSabha = vidhanSabha;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

