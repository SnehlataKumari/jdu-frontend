import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  roleWiseUsers;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe((response) => {
      const users = response['data'];
      this.roleWiseUsers = groupBy(users, 'role');
    })
  }

}