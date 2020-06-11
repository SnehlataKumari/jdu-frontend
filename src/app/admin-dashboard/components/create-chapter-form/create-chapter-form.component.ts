import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-chapter-form',
  templateUrl: './create-chapter-form.component.html',
  styleUrls: ['./create-chapter-form.component.scss']
})
export class CreateChapterFormComponent implements OnInit {

  isUploading = false;
  form: FormGroup;
  initialValues;
  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<CreateChapterFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initialValues = this.data.chapter;

    this.form = this.fb.group({
      _id: [this.initialValues._id],
      title: [this.initialValues.title, Validators.required],
      description: [this.initialValues.description, Validators.required],
      class: [this.initialValues.class, Validators.required],
      subject: [this.initialValues.subject, Validators.required],
    });
  }
  
  onReset() {
    this.form.reset(this.initialValues);
  }

  async submit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      let response;
      const {
        _id, ...othr
      } = formValues;

      this.isUploading = true;
      if (formValues._id == '') {
        response = await this.api.post(this.data.resourceUrl, othr).toPromise();
      } else {
        const url = `${this.data.resourceUrl}/${_id}`;
        response = await this.api.put(url, othr).toPromise();
      }

      this.isUploading = false;
      this.dialogRef.close(response);
    }
  }

}
