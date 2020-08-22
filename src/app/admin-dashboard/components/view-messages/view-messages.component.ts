import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.scss']
})
export class ViewMessagesComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {

    this.fetchAllMessages();
  }

  async fetchAllMessages() {
    const response = await this.apiService.get('/messages').toPromise();
    const messageList = response['data'];
    this.rowData = messageList;
  }

  columnDefs = [
    { headerName: 'Message', field: 'message', sortable: true, filter: true},
    { headerName: 'Sent Via', field: 'mediumType' },
    { headerName: 'Message Sent group', field: 'sendToType' },
    { headerName: 'Message Sent to', field: 'usersId' },
    { headerName: 'Message sent on', field: 'createAt' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

}
