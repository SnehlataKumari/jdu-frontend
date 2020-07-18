import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

const loggedInRoutes = [
  { routePath: '/private-room', title: 'Private Room' },
  { routePath: '/documents', title: 'Download Documents' },
];
const routes = [
  { routePath: '/', title: 'Home' },
  { routePath: '/suggestions', title: 'Suggestion' },
  // { routePath: '/yatrayen', title: 'Yatrayen'},
  { routePath: '/impacts', title: 'Impacts' },
  { routePath: '/brand-bihar', title: 'Bihar Brand' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigationMenus = [];

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.navigationMenus = this.authService.isLoggedIn() ? loggedInRoutes : routes;
  }

}
