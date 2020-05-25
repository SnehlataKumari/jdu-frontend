import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent implements OnInit {

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<CreateResourceComponent>,
    @Inject(MAT_DIALOG_DATA) public resource) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  async onCreate(formValues) {
    const response = await this.api.post(this.resource.resourceUrl, formValues).toPromise();
    this.dialogRef.close(response);
  }

}
