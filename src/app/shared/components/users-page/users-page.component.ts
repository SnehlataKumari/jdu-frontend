import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'lodash';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { ResourceService } from '../../services/resource.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UploadUsersCsvFormComponent } from '../upload-users-csv-form/upload-users-csv-form.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  @Input() resourceUrl: string = '/users';
  classMap;
  classList;

  constructor(
    private resourceService: ResourceService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();

    this.displayedColumns = ['name', 'userName', 'email', 'mobileNumber', 'role', 'createdAt', 'updatedAt', 'action'];
    this.resetList(list['data']);
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

  onAddResource() {
    const user = {
      _id: '',
      name: '',
      mobileNumber: '',
      class: '',
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

}
