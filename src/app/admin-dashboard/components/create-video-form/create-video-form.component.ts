import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-video-form',
  templateUrl: './create-video-form.component.html',
  styleUrls: ['./create-video-form.component.scss']
})
export class CreateVideoFormComponent implements OnInit {

  isUploading = false;
  form: FormGroup;
  selectedFile: File;
  initialValues;
  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<CreateVideoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    console.log(data.classList);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initialValues = this.data.video;


    this.form = this.fb.group({
      _id: [this.data.video._id],
      title: [this.data.video.title, Validators.required],
      description: [this.data.video.description, Validators.required],
      class: [this.data.video.class, Validators.required],
    });
  }

  onUploadClick(fileField) {
    fileField.click();
  }

  fileChange(files) {
    this.selectedFile = files[0];
  }

  onReset() {
    this.form.reset(this.initialValues);
    this.selectedFile = undefined;
  }

  async submit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      let response;
      const {
        _id, ...othr
      } = formValues;

      const formData = new FormData();
      for (const key in othr) {
        if (othr.hasOwnProperty(key)) {
          const value = othr[key];
          formData.append(key, value);
        }
      }

      if(this.selectedFile) {
        formData.append('file', this.selectedFile);
      }

      this.isUploading = true;
      if (formValues._id == '') {
        response = await this.api.post(this.data.resourceUrl, formData).toPromise();
      } else {
        const url = `${this.data.resourceUrl}/${_id}`;
        response = await this.api.put(url, formData).toPromise();
      }

      this.isUploading = false;
      this.dialogRef.close(response);
    }
  }

}
