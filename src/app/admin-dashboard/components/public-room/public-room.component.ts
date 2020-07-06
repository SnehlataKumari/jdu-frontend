import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-room',
  templateUrl: './public-room.component.html',
  styleUrls: ['./public-room.component.scss']
})
export class PublicRoomComponent implements OnInit {

  liveStreamId = 'kgjcfbhv';
  constructor() { }

  ngOnInit(): void {
  }

}
