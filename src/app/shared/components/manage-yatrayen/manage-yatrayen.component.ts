import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ResourceService } from '../../services/resource.service';
import { CreateYatrayenComponent } from '../create-yatrayen/create-yatrayen.component';

@Component({
  selector: 'app-manage-yatrayen',
  templateUrl: './manage-yatrayen.component.html',
  styleUrls: ['./manage-yatrayen.component.scss']
})
export class ManageYatrayenComponent implements OnInit {

  @Input() resourceUrl: string = '/yatrayen';

  constructor(
    private resourceService: ResourceService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();

    this.displayedColumns = [
      'title',
      'imageUrl',
      'description',
      'createdAt',
      'updatedAt',
      'action'
    ];
    this.resetList(list['data']);
  }

  async reFetchResourceList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.resetList(list['data']);
  }

  resetList(users) {
    console.log(users);

    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
  }
  openDialogue(user) {
    const dialogRef = this.dialog.open(CreateYatrayenComponent, {
      width: '600px',
      data: {
        resourceUrl: this.resourceUrl,
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
      title: '',
      imageUrl: '',
      description: ''
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

}
