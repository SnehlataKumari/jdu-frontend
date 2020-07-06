import { Component, OnInit, ViewChild } from '@angular/core';

export interface MenuList {
  link: string;
  title: string;
  icon: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menuList: MenuList[] = [
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
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
