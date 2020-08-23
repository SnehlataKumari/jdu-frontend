import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.scss'],
})
export class SendMessagesComponent implements OnInit {

  messageForm: FormGroup;
  users;
  submitted:boolean = false;
  select1send:boolean = false;
  selection = new SelectionModel(true, []);

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
      })
    });
    this.validate();
    this.messageForm.valueChanges.subscribe(this.validate);
    this.fetchUsers();
  }
  validate= () =>{
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

  async onSend() {
    const selectedUsers = this.selection.selected;
    this.submitted=true;
    const message = this.messageForm.value;
    if(this.select1send || this.selection.selected.length==0) {
      return
    }
    const response = await this.api.post('/messages', {
      ...message,
      sendToType: { ALL:false, CUSTOM:true, STATE_LEVEL_USER:false, BLOCK_LEVEL_USER:false,DISTRICT_LEVEL_USER:false},
      usersId: selectedUsers.map(u => u._id)
    }).toPromise();

    this.alert.success('Message Sent!!');
    this.submitted=false;
    this.selection.clear();
  }
}
