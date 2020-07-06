import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;
  token;

  constructor(
    private router: Router,
    private api: ApiService
  ) {

    const accessToken = localStorage.getItem('access_token');
    const user = localStorage.getItem('user');

    if(user) {
      this.user = JSON.parse(user);
    }

    this.token = accessToken;
   }

  async login({username, password}) {
    const url = `/auth/login-with-username`;
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
    this.user = user;
    this.token = access_token;

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user', JSON.stringify(user));

    let navigateTo = ['private-room'];
    if (user.role === 'ADMIN' || user.role === 'SUPER_ADMIN') {
      navigateTo = ['dashboard'];
    }

    this.router.navigate(navigateTo);
  }

  afterLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.user = null;
    this.token = null;
    this.router.navigate(['login']);
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');

    this.user = null;
    this.token = null;

    this.router.navigate(['']);
  }

  isLoggedIn() {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken;
  }
}

