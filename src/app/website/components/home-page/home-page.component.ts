import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { LiveStreamService } from 'src/app/admin-dashboard/services/live-stream.service';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var window: any;

export interface Information {
  title: string,
  description: string,
  imgUrl?: string
};

// const upComingEvents: Information[] = [
//   {
//     imgUrl: '/assets/img/upcoming_events/001.jpg',
//     title: 'TITLE_1_ECONOMIC_SOLUTION',
//     description: `DESCRIPTION_1_SELF_HELP`,
//   },
//   {
//     imgUrl: '/assets/img/upcoming_events/002.jpg',
//     title: 'TITLE_2_RESERVED_EMPLOYMENT',
//     description: `DESCRIPTION_2_THE_BIHAR`,
//   },
//   {
//     imgUrl: '/assets/img/upcoming_events/003.jpg',
//     title: 'TITLE_3_OPPORTUNITIES_INCREASED',
//     description: `DESCRIPTION_3_THE_GOVERNMENT`,
//   },
// ];

const ourAchievements: Information[] = [
  {
    imgUrl: '/assets/img/achievements/01.jpg',
    title: 'Bicycle and Dress Plan',
    description: `It sounds small to hear a bicycle, but it gave girls in Bihar a new perspective to see the world and
              touch their targets.`,
  },
  {
    imgUrl: '/assets/img/achievements/02.jpg',
    title: 'Public Grievances Redressal Act',
    description: `Shri Nitish Kumar has empowered 11 crore people of Bihar as Public Grievances Redressal Rights Act.`,
  },
  {
    imgUrl: '/assets/img/achievements/03.jpg',
    title: 'Agricultural Roadmap',
    description: `The agricultural roadmap has given a new shape and dimension to the rural economy of Bihar.`,
  },
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  $intervalRef: Subscription;
  liveRailyStatus = '';
  isStreamLive = false;
  bannerMessage = 'STARTING_SOON';

  brandUrl = '/brand-bihar';
  speechesUrl = '/speeches';

  baseUrl:string = 'https://www.youtube.com/embed/';

  async fetchBrandBiharList() {
    const response = await this.apiService.get(this.brandUrl).toPromise();
    const yatrayen = response['data'];
    this.brandBiharList= yatrayen.map((item)=> {
      const videoId= item.videoUrl;
      const videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}${videoId}`);
      return { ...item, videoUrl };
    });
  };

  async fetchYatrayenList() {
    const response = await this.apiService.get(this.speechesUrl).toPromise();
    const yatrayen = response['data'];
    this.yatrayen= yatrayen.map((item)=> {
      const videoId= item.videoUrl;
      const videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}${videoId}`);
      return { ...item, videoUrl };
    });
    console.log(this.yatrayen);
  };
  
  streamUrl = 'https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/live/playlist.m3u8';

  brandBiharList = [];
  yatrayen = [];

  constructor(
    private _liveStream: LiveStreamService,
    private apiService: ApiService,
    protected sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.$intervalRef = this._liveStream.getLiveRailyStatus().subscribe(state => {
      this.liveRailyStatus = state;
    })
    this.fetchBrandBiharList();
    this.fetchYatrayenList();
  }

  ngOnDestroy() {
    this.$intervalRef && this.$intervalRef.unsubscribe();
  }

}
