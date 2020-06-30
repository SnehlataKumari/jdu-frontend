import { Component, OnInit, OnDestroy } from '@angular/core';
import { LiveStreamService } from '../../services/live-stream.service';
import { interval, Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.scss']
})
export class LiveStreamComponent implements OnInit, OnDestroy {

  liveStreamStatus = '';
  errorMessage = '';
  liveStream;
  redirectedToStreamPage = false;

  constructor(
    private _liveStream: LiveStreamService
  ) { }

  $intervalRef: Subscription;

  async ngOnInit() {
    
    await this.setLiveStreamDetails();
    this.$intervalRef = this._liveStream.getLiveRailyStatus().subscribe((state) => {
      this.liveStreamStatus = state;
      if(state === 'started') {
        if (!this.redirectedToStreamPage) {
          this.gotoStreamPage();
          this.redirectedToStreamPage = true;
        }
      }
      console.log(state);
    });
  }

  ngOnDestroy() {
    this.$intervalRef && this.$intervalRef.unsubscribe();
  }

  async onStartLiveStream() {
    try {
      const response: any = await this._liveStream.startLiveStream().toPromise();
      const { live_stream: { state } } = response;
      this.liveStreamStatus = state;  
    } catch (error) {
      console.log(error);
      const {error: {meta: {status}}} = error;
      if (status === 422) {
        this.errorMessage = 'Stream is in start mode';
      }
    } 
  }

  async setLiveStreamDetails() {
    const liveStream: any = await this._liveStream.getLiveStream().toPromise();
    this.liveStream = liveStream.live_stream;
    console.log(liveStream); 
  }
  
  async setLiveStreamStatus() {
    const liveStreamStatus: any = await this._liveStream.getLiveStreamStatus().toPromise();
    const {transcoder: {state}} = liveStreamStatus;
    this.liveStreamStatus = state;
  }

  async gotoStreamPage() {
    const connInfo = this.liveStream.source_connection_information;
    console.log(connInfo);
    
    const hostedPageURL = this.liveStream.hosted_page_url;
    const url = `https://www.wowza.com/webrtc/publish?applicationName=${connInfo.application_name}&hostedPageURL=${hostedPageURL}&sdpURL=${connInfo.sdp_url}&streamName=${connInfo.stream_name}&transcoderState=started`;
    window.open(url, "_blank");
  }

  async onStopLiveStream() {
    await this._liveStream.stopLiveStream().toPromise();
    await this.setLiveStreamStatus();
  }
}
