import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  menuList =[
    {
      link: '/dashboard',
      title: 'Dashboard',
      icon: 'supervised_user_circle'
    },
    {
      link: '/dashboard/users',
      title: 'Manage Users',
      icon: 'supervised_user_circle'
    },
    {
      link: '/dashboard/public-room',
      title: 'Live Stream',
      icon: 'supervised_user_circle'
    },
    {
      link: '/dashboard/private-room',
      title: 'Private Room',
      icon: 'supervised_user_circle'
    },
    {
      link: '/dashboard/documents',
      title: 'Upload Documents',
      icon: 'supervised_user_circle'
    },
    {
      link: '/dashboard/suggestions',
      title: ' Manage Suggestions',
      icon: 'supervised_user_circle'
    },
  ];


  showFiller = false;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }
  

}
