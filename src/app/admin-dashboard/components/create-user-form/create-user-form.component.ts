import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateResourceComponent } from '../create-resource/create-resource.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  form: FormGroup;
  initialValues;
  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<CreateUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      console.log(data.classList);
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initialValues = this.data.user;
    
    this.form = this.fb.group({
      _id: [this.data.user._id],
      name: [this.data.user.name, Validators.required],
      mobileNumber: [this.data.user.mobileNumber, Validators.required],
      class: [this.data.user.class, Validators.required],
      isSubscribed: [this.data.user.isSubscribed, Validators.required],
    });
  }

  async submit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      let response;
      const {
        _id, ...othr
      } = formValues;

      if (formValues._id == '') {
        response = await this.api.post(this.data.resourceUrl, othr).toPromise();
      } else {
        const url = `${this.data.resourceUrl}/${_id}`;
        response = await this.api.put(url, formValues).toPromise();
      }
      
      this.dialogRef.close(response);
    }
  }

}
