import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-create-brand-bihar',
  templateUrl: './create-brand-bihar.component.html',
  styleUrls: ['./create-brand-bihar.component.scss']
})
export class CreateBrandBiharComponent implements OnInit {

  form: FormGroup;
  initialValues;
  isCreateMode = true;

  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<CreateBrandBiharComponent>,
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
      videoUrl: [this.initialValues.videoUrl, Validators.required],
    });
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
