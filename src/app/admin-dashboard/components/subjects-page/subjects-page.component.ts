import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResourceService } from '../../../shared/services/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateSubjectFormComponent } from '../create-subject-form/create-subject-form.component';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss']
})
export class SubjectsPageComponent implements OnInit {

  @Input() resourceUrl: string = '/subjects';
  constructor(
    private resourceService: ResourceService,
    public dialog: MatDialog
  ) { }

  classMap;
  classList;

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    const classesResponse = await this.resourceService.fetchAll('/classes').toPromise();
    this.classList = classesResponse['data'];
    this.classMap = new Map(classesResponse['data'].map((clas) => [clas._id, clas.name]));

    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();

    this.displayedColumns = ['title', 'description', 'class', 'createdAt', 'updatedAt', 'action'];
    this.dataSource = new MatTableDataSource(list['data']);
    this.dataSource.paginator = this.paginator;
  }

  async reFetchResourceList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.dataSource = new MatTableDataSource(list['data']);
  }

  openDialogue(subject) {
    const dialogRef = this.dialog.open(CreateSubjectFormComponent, {
      width: '600px',
      data: {
        resourceUrl: this.resourceUrl,
        classList: this.classList,
        subject
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reFetchResourceList();
    });
  }

  onAddResource() {
    const subject = {
      _id: '',
      title: '',
      description: '',
      class: '',
    };
    this.openDialogue(subject);

  }

  onUpdate() {
    this.reFetchResourceList();
  }

  getClassName(subjectId) {
    return this.classMap.get(subjectId) || 'Subject has been deleted';
  }

  async onDelete(resource) {
    await this.resourceService.delete(this.resourceUrl, resource).toPromise();
    this.reFetchResourceList();
  }

  async onEdit(element) {
    this.openDialogue(element);
  }

}
