import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LiveStreamService } from '../admin-dashboard/services/live-stream.service';
declare var window: any;
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: [
    './website.component.scss'
  ]
})
export class WebsiteComponent {

  constructor() {
    
  }

}
