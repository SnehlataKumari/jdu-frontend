import { Component, OnInit, Inject, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { USER_ROLES, BRANCH_LIST, DESIGNATION_LIST, DISTRICT_VIDHAN_MAP } from 'src/app/constants';
import { AuthService } from 'src/app/auth/services/auth.service';
import { pick, filter } from 'lodash';

const passwordExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

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
  branchList = BRANCH_LIST;
  designationList = DESIGNATION_LIST;
  districtMap = DISTRICT_VIDHAN_MAP;
  districtList = Reflect.ownKeys(DISTRICT_VIDHAN_MAP);
  vidhanSabhaList = [];

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
      email: [this.initialValues.email, Validators.email],
      mobileNumber: [this.initialValues.mobileNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      role: [this.initialValues.role || Reflect.ownKeys(this.displayRoles)[0], Validators.required],
      branch: [this.initialValues.branch, Validators.required],
      designation: [this.initialValues.designation, Validators.required],
      district: [this.initialValues.district, Validators.required],
      vidhansabha: [this.initialValues.vidhansabha, Validators.required],
      username: [this.initialValues.username, Validators.required],
    });

    if (this.isCreateMode) {
      this.form.addControl('password', new FormControl('',
        [
          Validators.required,
          Validators.pattern(passwordExpression)]
      )
      );
    }

    this.form.controls.district.valueChanges.subscribe((value) => {
      this.vidhanSabhaList = this.districtMap[value].map(i => i.Vidhansabha);
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
