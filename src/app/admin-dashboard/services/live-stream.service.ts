import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { interval, of, from } from 'rxjs';
import { flatMap, map, catchError } from 'rxjs/operators';

const WSC_API_KEY = "29CC3MQmAET3pwuOFHPABreCp9OZInbYD8B9tmEDrpUIaDjAVCQFzFCFgc8g3115";
const WSC_ACCESS_KEY = "iNrOB9jmcuGj5hccNXBedZ1NsyXnP9WtVhPWkXrrw8GcoBkrUrccWMiDFV3Z3628";
const WSC_HOST = "https://api.cloud.wowza.com";
const WSC_VERSION = "/api/v1.5";
const hostUrl = `${WSC_HOST}/${WSC_VERSION}`;

@Injectable({
  providedIn: 'root'
})
export class LiveStreamService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAuthHeaders(options = {}) {
    const httpHeader = new HttpHeaders({
      ...options,
      "Content-Type": "application/json",
      "wsc-api-key": WSC_API_KEY,
      "wsc-access-key": WSC_ACCESS_KEY
    })
    return httpHeader;
  }

  startLiveStream(liveStreamId = 'kgjcfbhv') {
    const url = `${hostUrl}/live_streams/${liveStreamId}/start`;
    const withAuthToken = this.getAuthHeaders();
    return this.httpClient.put(url, {}, { headers: withAuthToken});
  }
  
  stopLiveStream(liveStreamId = 'kgjcfbhv') {
    const url = `${hostUrl}/live_streams/${liveStreamId}/stop`;
    const withAuthToken = this.getAuthHeaders();
    return this.httpClient.put(url, {}, { headers: withAuthToken});
  }

  getLiveStream(liveStreamId = 'kgjcfbhv') {
    const url = `${hostUrl}/live_streams/${liveStreamId}`;
    const withAuthToken = this.getAuthHeaders();
    return this.httpClient.get(url, { headers: withAuthToken });
  }
  
  getLiveStreamStatus(liveStreamId = 'kgjcfbhv') {
    const url = `${hostUrl}/transcoders/${liveStreamId}/state`;
    const withAuthToken = this.getAuthHeaders();
    return this.httpClient.get(url, { headers: withAuthToken });
  }

  getLiveRailyStatus(liveStreamId = 'kgjcfbhv') {
    return interval(5 * 1000).pipe(
      flatMap(() => this.getLiveStreamStatus(liveStreamId).pipe(map((liveStreamStatus: any) => {
        const { transcoder: { state } } = liveStreamStatus;
        return state;
      })))
    )
  }

  isStreamLive(url = `https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/live/playlist.m3u8`) {
    // const url = `https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/live/playlist.m3u8`;
    const withAuthToken = this.getAuthHeaders();

    return interval(5 * 1000).pipe(
      flatMap(() => from(fetch(url)))
    )
  }
}
