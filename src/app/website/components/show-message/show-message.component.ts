import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent implements OnInit {

  messages;
  constructor(
    private api: ApiService,
    private auth: AuthService

  ) { }

  ngOnInit(): void {
    this.getAllMessges();
  }

  async getAllMessges() {
    const user = this.auth.user;
    const response = await this.api.get(`/messages/users/${user._id}`).toPromise();
    this.messages = response['data'];
    console.log(this.messages);
    
  }

}
