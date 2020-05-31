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
      link: '/dashboard/classes',
      title: 'Manage Classes',
      icon: 'class'
    },
    {
      link: '/dashboard/chapter',
      title: 'Manage Chapters',
      icon: 'play_circle_outline'
    },
    {
      link: '/dashboard/users',
      title: 'Manage Users',
      icon: 'supervised_user_circle'
    },
    {
      link: '/dashboard/videos',
      title: 'Manage Videos',
      icon: 'play_circle_outline'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  // onMenuSelection(menu) {
  //   console.log(menu.selectedOptions.selected.value);
  //   console.log(menu);
  //   debugger;
    
    
  // }

}
