import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ResourceService } from '../../../shared/services/resource.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateResourceComponent } from '../create-resource/create-resource.component';

interface ColumnConfig {
  columnName: string,
  title: string
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  @Input() resourceUrl: string;
  @Input() columnConfig: ColumnConfig[] = [];

  constructor(
    private resourceService: ResourceService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  async ngOnInit() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.displayedColumns = ['name', 'createdAt', 'updatedAt', 'action'];
    this.dataSource = new MatTableDataSource(list['data']);
    this.dataSource.paginator = this.paginator;
  }

  async reFetchResourceList() {
    const list = await this.resourceService.fetchAll(this.resourceUrl).toPromise();
    this.dataSource = new MatTableDataSource(list['data']);
  }

  onAddResource() {
    const dialogRef = this.dialog.open(CreateResourceComponent, {
      width: '600px',
      data: {
        resourceUrl: this.resourceUrl
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.data = [...this.dataSource.data, result['data']]; 
    });
  }

  onUpdate() {
    this.reFetchResourceList();
  }

  async onDelete(resource) {
    await this.resourceService.delete(this.resourceUrl, resource).toPromise();
    this.reFetchResourceList();
  }

}

export interface Classes {
  name: string;
  createdAt: number;
  updatedAt: number;
  _id: string;
}
