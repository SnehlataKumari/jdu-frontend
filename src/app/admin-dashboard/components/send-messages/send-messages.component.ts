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
  submitted:boolean = false;
  select1medium:boolean = false;
  select1send:boolean = false;
  selectUser:boolean = false;
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
      message: ['', Validators.required],
      mediumType: this.fb.group({
        SMS: [false, Validators.required],
        EMAIL: [false, Validators.required],
        PRIVATE: [false, Validators.required],
      }),
      sendToType: this.fb.group({
        ALL: [false, Validators.required],
        CUSTOM: [false, Validators.required],
        STATE_LEVEL_USER: [false, Validators.required],
        BLOCK_LEVEL_USER: [false, Validators.required],
        DISTRICT_LEVEL_USER: [false, Validators.required],
      })
    });
    this.validate();
    this.messageForm.valueChanges.subscribe(this.validate);
    this.fetchUsers();
  }
  validate= () =>{
    const { ALL, BLOCK_LEVEL_USER, CUSTOM, DISTRICT_LEVEL_USER, STATE_LEVEL_USER} = this.messageForm.controls.sendToType.value;
    if(ALL) {
      this.select1medium = false;
      this.selectUser = false;
    } else if(!BLOCK_LEVEL_USER && !CUSTOM && !DISTRICT_LEVEL_USER && !STATE_LEVEL_USER) {
      this.select1medium = true;
    } else if(CUSTOM && this.selectedUsers.length===0) {
      this.selectUser = true;
      this.select1medium = false;
    } else {
      this.select1medium = false;
      this.selectUser = false;
    }
    const { SMS, EMAIL, PRIVATE } = this.messageForm.controls.mediumType.value;
    if(!SMS && !EMAIL && !PRIVATE) {
      this.select1send = true;
    } else {
      this.select1send = false;
    }
  }

  async fetchUsers() {
    const response = await this.auth.getAllUsers().toPromise();
    this.users = response['data'];
  }

  toggleSendToAll() {

  }

  async onSend() {
    this.submitted=true;
    const message = this.messageForm.value;
    if(this.select1medium || this.select1send || this.selectUser) {
      return
    }
    
    const response = await this.api.post('/messages', {
      ...message,
      usersId: this.selectedUsers.map(u => u._id)
    }).toPromise();

    this.alert.success('Message Sent!!');
    this.submitted=false;

  }
}
