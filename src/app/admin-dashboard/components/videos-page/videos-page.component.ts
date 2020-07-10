import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResourceService } from '../../../shared/services/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CreateVideoFormComponent } from '../create-video-form/create-video-form.component';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent implements OnInit {

  @Input() resourceUrl: string = '/assets';
  classMap;
  classList;

  chapterMap;
  chapterList;

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
    const classesResponse = await this.resourceService.fetchAll('/classes').toPromise();
    this.classList = classesResponse['data'];
    this.classMap = new Map(classesResponse['data'].map((clas) => [clas._id, clas.name]));
    
    const chaptersResponse = await this.resourceService.fetchAll('/chapters').toPromise();
    this.chapterList = chaptersResponse['data'];
    this.chapterMap = new Map(chaptersResponse['data'].map((chapter) => [chapter._id, chapter.title]));
    
    const subjectResponse = await this.resourceService.fetchAll('/subjects').toPromise();
    this.subjectList = subjectResponse['data'];
    this.subjectMap = new Map(subjectResponse['data'].map((chapter) => [chapter._id, chapter.title]));

    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();

    this.displayedColumns = [
      'title', 'description', 'subject', 'class', 'chapter',
      'videoS3', 'pdfS3', 'createdAt', 'updatedAt', 'action'
    ];
    this.dataSource = new MatTableDataSource(list['data']);
    this.dataSource.paginator = this.paginator;
  }

  async reFetchResourceList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.dataSource = new MatTableDataSource(list['data']);
  }

  getClassName(classId) {
    return this.classMap.get(classId) || 'Class has been deleted';
  }

  getChapterName(chapterId) {
    return this.chapterMap.get(chapterId) || 'Chapter has been deleted';
  }

  getSubjectName(chapterId) {
    return this.subjectMap.get(chapterId) || 'Subject has been deleted';
  }

  openDialogue(video) {
    const dialogRef = this.dialog.open(CreateVideoFormComponent, {
      width: '600px',
      data: {
        resourceUrl: this.resourceUrl,
        classList: this.classList,
        chapterList: this.chapterList,
        subjectList: this.subjectList,
        video
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reFetchResourceList();
    });
  }

  onAddResource() {
    const video = {
      _id: '',
      title: '',
      description: '',
      class: '',
      subject: '',
      chapter: '',
    };
    this.openDialogue(video);

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
