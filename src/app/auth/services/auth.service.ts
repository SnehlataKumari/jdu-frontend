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

  async login({username, password, role}) {
    const url = `/auth/login-with-username`;
    const response: any = await this.api.post(url, {
      username, password
    }).toPromise()
    .catch(error => {
      alert(error.error.message);
      throw error;
    });

    this.afterLogin(response, role);
  }

  afterLogin(response, role) {
    const {data: {access_token, user}} = response;
    this.user = user;
    this.token = access_token;
    if(role !== this.user.role) {
      throw new Error('Invalid user type!');
    }

    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user', JSON.stringify(user));

    let navigateTo = ['private-room'];
    if (user.role === 'ADMIN') {
      navigateTo = ['dashboard'];
    } else if (user.role === 'SUPER_ADMIN') {
      navigateTo = ['admin']
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

  getLogginedUserRole(): string {
    return this.user.role;
  }
}

