import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER_ROLES, BRANCH_LIST, DESIGNATION_LIST, DISTRICT_VIDHAN_MAP } from 'src/app/constants';
import { AuthService } from 'src/app/auth/services/auth.service';
import { pick, filter } from 'lodash';

@Component({
  selector: 'app-change-password',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  user;

  showPassword = false;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.user = data.user;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: [''],
    });
  }

  async submit() {
    console.log(this.form.value);
    
    // const response = await this.authService.changePassword(this.form.value.password)
    // this.dialogRef.close(response);
  }
}
