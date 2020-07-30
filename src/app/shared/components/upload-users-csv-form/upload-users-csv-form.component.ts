import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-upload-users-csv-form',
  templateUrl: './upload-users-csv-form.component.html',
  styleUrls: ['./upload-users-csv-form.component.scss']
})
export class UploadUsersCsvFormComponent implements OnInit {

  selectedFile;
  constructor(
    private api: ApiService,
    private alert: AlertService,
    public dialogRef: MatDialogRef<UploadUsersCsvFormComponent>,
  ) { }

  ngOnInit(): void {
    
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  async uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      try {
        const response = await this.api.post('/users/migrate-users', formData).toPromise();
        this.alert.success('Users created successfully!');
        this.dialogRef.close();
      } catch (error) {
        this.alert.error(error.error.message);
      }
    }
  }

}
