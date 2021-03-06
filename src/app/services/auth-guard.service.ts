import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  canActivate() {
    return this.checkLogin();
    // return true;
  }

  checkLogin() {
    let isLogin = this.authService.isLoggedIn();

    if (isLogin) {
      return true;
    } else {
      this.router.navigate(['auth','login'], { relativeTo: this.activatedRoute});
      // this.router.navigate(['/auth/login']);
      return false;
    }
  }
}