import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-class-form',
  templateUrl: './create-class-form.component.html',
  styleUrls: ['./create-class-form.component.scss']
})
export class CreateClassFormComponent implements OnInit {

  isUploading = false;
  form: FormGroup;
  initialValues;
  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<CreateClassFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initialValues = this.data.classObj;

    this.form = this.fb.group({
      _id: [this.initialValues._id],
      name: [this.initialValues.name, Validators.required]
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
