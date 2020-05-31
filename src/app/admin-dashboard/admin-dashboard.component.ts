import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  showFiller = false;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.afterLogout();
  }
  

}
