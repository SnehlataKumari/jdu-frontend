import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateClassFormComponent } from '../create-class-form/create-class-form.component';

interface ColumnConfig {
  columnName: string,
  title: string,
}
@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})
export class ClassesPageComponent implements OnInit {

  columnConfig: ColumnConfig[] = [
    {columnName: '_id', title: 'Id'},
    {columnName: 'name', title: 'Name'},
    {columnName: 'createdAt', title: 'Created on'},
    {columnName: 'updatedAt', title: 'Updated On'},
  ];

  @Input() resourceUrl: string = '/classes';
  subjectMap;
  subjectList;

  constructor(
    private resourceService: ResourceService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    const classesResponse = await this.resourceService.fetchAll('/subjects').toPromise();
    this.subjectList = classesResponse['data'];
    this.subjectMap = new Map(classesResponse['data'].map((clas) => [clas._id, clas.title]));

    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();

    this.displayedColumns = ['name', 'subject', 'createdAt', 'updatedAt', 'action'];
    this.dataSource = new MatTableDataSource(list['data']);
    this.dataSource.paginator = this.paginator;
  }

  async reFetchResourceList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.dataSource = new MatTableDataSource(list['data']);
  }

  getSubjectName(subjectId) {
    return this.subjectMap.get(subjectId) || 'Subject has been deleted';
  }

  openDialogue(classObj) {
    const dialogRef = this.dialog.open(CreateClassFormComponent, {
      width: '600px',
      data: {
        resourceUrl: this.resourceUrl,
        subjectList: this.subjectList,
        classObj
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reFetchResourceList();
    });
  }

  onAddResource() {
    const classObj = {
      _id: '',
      name: '',
      subject: '',
    };
    this.openDialogue(classObj);

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
