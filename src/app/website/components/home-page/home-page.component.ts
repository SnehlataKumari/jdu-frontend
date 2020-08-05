import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { LiveStreamService } from 'src/app/admin-dashboard/services/live-stream.service';
import { Subscription } from 'rxjs';
declare var window: any;

export interface Information {
  title: string,
  description: string,
  imgUrl?: string
};

const upComingEvents: Information[] = [
  {
    imgUrl: '/assets/img/upcoming_events/001.jpg',
    title: 'Economic Solution, Force on Youth',
    description: `Self-help allowance of Rs 1000 per month for all youth between 20 and 25 years and
          student loans up to Rs 4 lakh for all 12th grade passing students through credit cards and for which the
        state guarantor is like five Ambitious schemes are running under this determination.`,
  },
  {
    imgUrl: '/assets/img/upcoming_events/002.jpg',
    title: 'Reserved Employment, Women Rights',
    description: `The Bihar government has ensured that there will be a 35 percent horizontal
              reservation for women for direct appointments at all levels and in all types of posts of all government
              services-cadres. Bihar is the first state to do so.`,
  },
  {
    imgUrl: '/assets/img/upcoming_events/003.jpg',
    title: 'Opportunities Increased, Read Further',
    description: `The Government is committed to establish five new Medical Colleges, Nursing
              Colleges, ANM Schools, GNM Schools, Para-Medical Institutes, Polytechnics, Industrial Training Institutes,
              Engineering Universities etc., so that all kinds of opportunities are available within the state.`,
  },
];

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
  bannerMessage = 'The Rally Starting Soon ';


  streamUrl = 'https://cdn3.wowza.com/1/KzJsblU0S2RDNGUv/N0NtNnZM/hls/live/playlist.m3u8';

  upComingEvents = upComingEvents;
  ourAchievements = upComingEvents;

  constructor(
    private _liveStream: LiveStreamService,
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
