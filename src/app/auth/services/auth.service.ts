import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(loginFormValues) {
    this.afterLogin();
  }

  afterLogin() {
    this.router.navigate(['dashboard']);
  }
}
