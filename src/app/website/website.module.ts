import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LiveStreamPlayerComponent } from './components/live-stream-player/live-stream-player.component';


@NgModule({
  declarations: [WebsiteComponent, HomePageComponent, LiveStreamPlayerComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
