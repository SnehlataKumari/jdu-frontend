import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { USER_ROLES } from 'src/app/constants';
import { pick, filter } from 'lodash';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  isSuperAdminRoute;
  displayRoles;
  keys;

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isSuperAdminRoute = this.router.url.includes('admin');
    this.displayRoles = this.isSuperAdminRoute === 'SUPER_ADMIN' ? pick(USER_ROLES, ['ADMIN']) : pick(USER_ROLES, filter(Reflect.ownKeys(USER_ROLES), (role) => !(role === 'SUPER_ADMIN')));
    this.keys = Reflect.ownKeys(this.displayRoles);

    this.form = this.fb.group({
      role: [this.isSuperAdminRoute ? 'ADMIN' : '', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
  @Input() error: string | null;
  @Output() onSubmit = new EventEmitter();
  
}
