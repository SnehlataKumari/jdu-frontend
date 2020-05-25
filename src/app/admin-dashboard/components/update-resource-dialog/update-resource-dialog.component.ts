import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateResourceFormComponent } from '../update-resource-form/update-resource-form.component';

@Component({
  selector: 'app-update-resource-dialog',
  templateUrl: './update-resource-dialog.component.html',
  styleUrls: ['./update-resource-dialog.component.scss']
})
export class UpdateResourceDialogComponent implements OnInit {

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<UpdateResourceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  async onUpdate(id, formValues) {
    const url = `${this.data.resourceUrl}/${id}`;
    const response = await this.api.put(url, formValues).toPromise();
    this.dialogRef.close(response);
  }

}
