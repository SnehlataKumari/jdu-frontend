import { Component, OnInit } from '@angular/core';

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
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
