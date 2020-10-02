import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  user;

  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.user = data.user;
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
    });
  }

  async submit() {
    if (this.form.valid) {
      const formValues = this.form.value;
      let response;
      const {
        password
      } = formValues;
      response = await this.api.post(`/auth/${this.user._id}/update-password`, { newPassword: password}).toPromise();
      this.dialogRef.close(response);
      this.alertService.success('Password changed successfully!');
    }
  }
}
