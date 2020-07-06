import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { LiveStreamService } from 'src/app/admin-dashboard/services/live-stream.service';
import { Subscription } from 'rxjs';
declare var window: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  $intervalRef: Subscription;
  liveRailyStatus = '';
  isStreamLive = false;
  bannerMessage = 'The Rally Starting Soon ';


  streamUrl = 'https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/live/playlist.m3u8'

  constructor(
    private _liveStream: LiveStreamService
  ) { }

  ngOnInit(): void {
    this.$intervalRef = this._liveStream.getLiveRailyStatus().subscribe(state => {
      this.liveRailyStatus = state;
    })
  }

  ngOnDestroy() {
    this.$intervalRef && this.$intervalRef.unsubscribe();
  }

}
