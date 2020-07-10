import { Component, OnInit, ViewChild, Input } from '@angular/core';

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

  @Input() menuList: MenuList[];
  constructor() { }

  ngOnInit(): void {
  }
}
