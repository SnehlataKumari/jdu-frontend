import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceService } from '../../../shared/services/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateResourceDialogComponent } from '../update-resource-dialog/update-resource-dialog.component';

@Component({
  selector: 'app-resource-actions',
  templateUrl: './resource-actions.component.html',
  styleUrls: ['./resource-actions.component.scss']
})
export class ResourceActionsComponent implements OnInit {

  @Input() resource;
  @Input() resourceUrl;

  @Output() onUpdate = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor(
    private resourceService: ResourceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onEdit() {
    const dialogRef = this.dialog.open(UpdateResourceDialogComponent, {
      width: '600px',
      data: {
        resourceUrl: this.resourceUrl,
        resource: this.resource
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onUpdate.emit(result);
    });
  }

  onDeleteEmit() {
    this.onDelete.emit(this.resource);
  }

}
