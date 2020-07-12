import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER_ROLES } from 'src/app/constants';
import { AuthService } from 'src/app/auth/services/auth.service';
import { pick, filter } from 'lodash';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  form: FormGroup;
  initialValues;
  displayRoles;

  keys;
  isCreateMode = true;

  @Input() error: string | null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<CreateUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      console.log(data.classList);
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initialValues = this.data.user;
    this.isCreateMode = this.initialValues._id === '';
    const loggedInUserRole = this.authService.getLogginedUserRole();
    this.displayRoles = loggedInUserRole === 'SUPER_ADMIN' ? pick(USER_ROLES, ['ADMIN']) : pick(USER_ROLES, filter(Reflect.ownKeys(USER_ROLES), (role) => !(role === 'ADMIN' || role === 'SUPER_ADMIN')));
    this.keys = Reflect.ownKeys(this.displayRoles);

    this.form = this.fb.group({
      _id: [this.initialValues._id],
      name: [this.initialValues.name, Validators.required],
      role: [this.initialValues.role || Reflect.ownKeys(this.displayRoles)[0], Validators.required],
      username: [this.initialValues.username, Validators.required],
      password: [this.initialValues.password, Validators.required],
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
        response = await this.api.post(this.data.resourceUrl, {...othr, password}).toPromise();
      } else {
        const url = `${this.data.resourceUrl}/${_id}`;
        response = await this.api.put(url, formValues).toPromise();
      }
      
      this.dialogRef.close(response);
    }
  }
}
