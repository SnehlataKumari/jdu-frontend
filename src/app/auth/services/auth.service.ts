import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  async login({username, password}) {
    const url = `/auth/login-admin`;
    const response: any = await this.api.post(url, {
      username, password
    }).toPromise()
    .catch(error => {
      alert(error.error.message);
      throw error;
    });

    this.afterLogin(response);
  }

  afterLogin(response) {
    const {data: {access_token, user}} = response;

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user', JSON.stringify(user));

    this.router.navigate(['dashboard']);
  }

  afterLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
