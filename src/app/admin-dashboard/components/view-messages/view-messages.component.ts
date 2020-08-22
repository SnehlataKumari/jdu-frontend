import { Component, OnInit, ViewChild } from '@angular/core';
import { DESIGNATION_LIST, BRANCH_LIST, DISTRICT_VIDHAN_MAP, USER_ROLES } from 'src/app/constants';
import { FormControl } from '@angular/forms';
import { ResourceService } from 'src/app/shared/services/resource.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { pick, filter } from 'lodash';
import { UsersListPopupComponent } from 'src/app/shared/components/users-list-popup/users-list-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.scss']
})
export class ViewMessagesComponent implements OnInit {

  displayRoles;
  keys;

  branchList = BRANCH_LIST;
  designationList = DESIGNATION_LIST;
  districtMap = DISTRICT_VIDHAN_MAP;
  districtList = Reflect.ownKeys(DISTRICT_VIDHAN_MAP);
  vidhanSabhaList = [];
  resourceUrl = '/messages';


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

    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    console.log(list);
    
    this.bindFilterListeners();

    this.displayedColumns = [
      'message',
      'mediumType',
      'sendToType',
      'usersId',
      'createdAt'
    ];
    this.resetList(list['data']);
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

  resetList(messages) {
    this.dataSource = new MatTableDataSource(messages);
    this.dataSource.paginator = this.paginator;
  }

  openDialogue(users) {
    console.log(users);
    
    const dialogRef = this.dialog.open(UsersListPopupComponent, {
      width: '1000px',
      data: {
        resourceUrl: this.resourceUrl,
        users
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}