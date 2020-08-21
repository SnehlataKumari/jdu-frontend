import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-yatrayen',
  templateUrl: './create-yatrayen.component.html',
  styleUrls: ['./create-yatrayen.component.scss']
})
export class CreateYatrayenComponent implements OnInit {

  form: FormGroup;
  initialValues;
  isCreateMode = true;

  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<CreateYatrayenComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  

  ngOnInit(): void {
    this.initialValues = this.data.user;
    this.isCreateMode = this.initialValues._id === '';
    this.form = this.fb.group({
      _id: [this.initialValues._id],
      title: [this.initialValues.title, Validators.required],
      description: [this.initialValues.description, Validators.required],
      imageUrl: [this.initialValues.imageUrl, Validators.required],
    });
  }

  onUploadSuccess(response) {
    if (response && response.fullPath) {
      this.form.patchValue({ imageUrl: response.fullPath});
    }
  }

  async submit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      let response;
      const {
        _id, password, ...othr
      } = formValues;

      if (formValues._id == '') {
        response = await this.api.post(this.data.resourceUrl, { ...othr, password }).toPromise();
      } else {
        const url = `${this.data.resourceUrl}/${_id}`;
        response = await this.api.put(url, formValues).toPromise();
      }

      this.dialogRef.close(response);
    }
  }
}
