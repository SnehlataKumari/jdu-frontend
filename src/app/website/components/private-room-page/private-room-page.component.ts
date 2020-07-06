import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LiveStreamService } from 'src/app/admin-dashboard/services/live-stream.service';

@Component({
  selector: 'app-private-room-page',
  templateUrl: './private-room-page.component.html',
  styleUrls: ['./private-room-page.component.scss']
})
export class PrivateRoomPageComponent implements OnInit, OnDestroy {

  $intervalRef: Subscription;
  liveRailyStatus = '';
  isStreamLive = false;
  liveStreamId ='x9mzbnhf';
  streamUrl = 'https://cdn3.wowza.com/1/aGdhMytVaS9tR3ZS/VldXUkpD/hls/live/playlist.m3u8'

  constructor(
    private _liveStream: LiveStreamService
  ) { }

  ngOnDestroy() {
    this.$intervalRef && this.$intervalRef.unsubscribe();
  }

  ngOnInit(): void {
    this.$intervalRef = this._liveStream.getLiveRailyStatus(this.liveStreamId).subscribe(state => {
      this.liveRailyStatus = state;
    })
  }
}
