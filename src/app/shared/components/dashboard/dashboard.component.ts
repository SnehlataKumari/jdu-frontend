import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { groupBy } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  roleWiseUsers;
  loggedInUsersRole;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.loggedInUsersRole = this.authService.getLogginedUserRole();
    if (this.loggedInUsersRole === 'BLOCK_LEVEL_USER') {
      this.router.navigate(['private-room']);
    }
    this.authService.getAllUsers().subscribe((response) => {
      const users = response['data'];
      this.roleWiseUsers = groupBy(users, 'role');
    });
  }
}
