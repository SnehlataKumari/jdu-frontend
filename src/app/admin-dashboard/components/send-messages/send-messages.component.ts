import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.scss'],
})
export class SendMessagesComponent implements OnInit {

  messageForm: FormGroup;
  users;

  selectedUsers = [];
  sendToAll = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private alert: AlertService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });

    this.fetchUsers();
  }

  async fetchUsers() {
    const response = await this.auth.getAllUsers().toPromise();
    this.users = response['data'];
  }

  toggleSendToAll() {

  }

  async onSend() {
    const message = this.messageForm.controls.message.value;

    const response = await this.api.post('/messages', {
      message,
      usersId: this.sendToAll ? [] : this.selectedUsers.map(u => u._id)
    }).toPromise();

    this.alert.success('Message Sent!!');
  }
}
