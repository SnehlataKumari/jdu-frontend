import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

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
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  onLogout() {
    this.authService.logout();
  }
}
