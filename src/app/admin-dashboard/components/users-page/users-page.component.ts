import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

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
    public dialog: MatDialog
  ) { }

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    const classesResponse = await this.resourceService.fetchAll('/classes').toPromise();
    this.classList = classesResponse['data'];
    this.classMap = new Map(classesResponse['data'].map((clas) => [clas._id, clas.name]));
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();

    this.displayedColumns = ['name', 'mobileNumber', 'role', 'class', 'isSubscribed', 'isBlocked', 'createdAt', 'updatedAt', 'action'];
    this.dataSource = new MatTableDataSource(list['data']);
    this.dataSource.paginator = this.paginator;
  }

  async reFetchResourceList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.dataSource = new MatTableDataSource(list['data']);
  }

  getClassName(classId) {
    console.log(this.classMap[classId]);
    return this.classMap.get(classId) || 'Class has been deleted';
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
