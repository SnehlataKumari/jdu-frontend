import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { groupBy } from 'lodash';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DocumentsService } from 'src/app/services/documents.service';

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
    private apiService: ApiService,
    private router: Router,
    private documentsService: DocumentsService

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
    this.getCount()
  }
  brandCount;
  speechesCount;
  documentCount;
  yatrayenCount;
  async getCount() {
    this.apiService.get('/brand-bihar').toPromise().then((response)=> {
      this.brandCount = response['data']? response['data'].length : 0 ;
    });
    this.apiService.get('/speeches').toPromise().then((response)=> {
      this.speechesCount = response['data']? response['data'].length : 0 ;
    });
    this.documentsService.getAllDocuments().toPromise().then((response)=> {
      this.documentCount = response['data']? response['data'].length : 0 ;
    });
    this.apiService.get('/yatrayen').toPromise().then((response)=> {
      this.yatrayenCount = response['data']? response['data'].length : 0 ;
    });
    
  }
}
