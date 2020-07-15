import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onLogin(loginFormValues) {
    // console.log(loginFormValues);
    try {
      await this.authService.login(loginFormValues);
    } catch (error) {
      alert(error.message);
    }
  }

}
