import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LiveStreamService } from '../../services/live-stream.service';
import { interval, Subscription } from 'rxjs';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.scss']
})
export class LiveStreamComponent implements OnInit, OnDestroy {

  @Input() liveStreamId = 'kgjcfbhv';
  liveStreamStatus = '';
  errorMessage = '';
  liveStream;
  redirectedToStreamPage = false;
  urlSafe: SafeResourceUrl;

  constructor(
    private _liveStream: LiveStreamService,
    public sanitizer: DomSanitizer
  ) { }

  $intervalRef: Subscription;

  async ngOnInit() {
    
    await this.setLiveStreamDetails();
    this.$intervalRef = this._liveStream.getLiveRailyStatus(this.liveStreamId).subscribe((state) => {
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
      const response: any = await this._liveStream.startLiveStream(this.liveStreamId).toPromise();
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
    const liveStream: any = await this._liveStream.getLiveStream(this.liveStreamId).toPromise();
    this.liveStream = liveStream.live_stream;
    console.log(liveStream); 
  }
  
  async setLiveStreamStatus() {
    const liveStreamStatus: any = await this._liveStream.getLiveStreamStatus(this.liveStreamId).toPromise();
    const {transcoder: {state}} = liveStreamStatus;
    this.liveStreamStatus = state;
  }

  async gotoStreamPage() {
    const connInfo = this.liveStream.source_connection_information;
    console.log(connInfo);
    
    const hostedPageURL = this.liveStream.hosted_page_url;
    // http://localhost:3000/webrtc/dev-view-publish.html?sdpURL=wss%3A%2F%2F4465bd.entrypoint.cloud.wowza.com%2Fwebrtc-session.json&applicationName=app-84b5&streamName=N0NtNnZM&audioBitrate=64&audioCodec=opus&videoBitrate=3500&videoCodec=42e01f&videoFrameRate=30&frameSize=1280x720
    const url = `${environment.hostUrl}/webrtc//dev-view-publish.html?applicationName=${connInfo.application_name}&hostedPageURL=${hostedPageURL}&sdpURL=${connInfo.sdp_url}&streamName=${connInfo.stream_name}&transcoderState=started`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  async onStopLiveStream() {
    await this._liveStream.stopLiveStream(this.liveStreamId).toPromise();
    await this.setLiveStreamStatus();

    this.urlSafe = undefined;
    this.redirectedToStreamPage = false;
  }
}
