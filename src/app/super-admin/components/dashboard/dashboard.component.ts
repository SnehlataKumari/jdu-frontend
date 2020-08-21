import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuList = [
    {
      link: '/admin/users',
      title: 'Manage Users',
      icon: 'supervised_user_circle'
    },
    {
      link: '/admin/suggestions',
      title: 'Manage suggestion questions',
      icon: 'supervised_user_circle'
    },
    {
      link: '/admin/schemes',
      title: 'Manage schemes',
      icon: 'supervised_user_circle'
    },
    {
      link: '/admin/manage-brand-bihar',
      title: 'Manage brand bihar',
      icon: 'supervised_user_circle'
    },
    {
      link: '/admin/manage-yatrayen',
      title: 'Manage yatrayen',
      icon: 'supervised_user_circle'
    },
  ]
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }

}
