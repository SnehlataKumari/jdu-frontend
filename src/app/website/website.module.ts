import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LiveStreamPlayerComponent } from './components/live-stream-player/live-stream-player.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PrivateRoomPageComponent } from './components/private-room-page/private-room-page.component';
import { BannerComponent } from './components/layout/banner/banner.component';
import { SuggestionPageComponent } from './components/suggestion-page/suggestion-page.component';
import { YatrayenPageComponent } from './components/yatrayen-page/yatrayen-page.component';
import { ImpactsPageComponent } from './components/impacts-page/impacts-page.component';
import { BrandBiharPageComponent } from './components/brand-bihar-page/brand-bihar-page.component';


@NgModule({
  declarations: [WebsiteComponent, HomePageComponent, LiveStreamPlayerComponent, HeaderComponent, FooterComponent, PrivateRoomPageComponent, BannerComponent, SuggestionPageComponent, YatrayenPageComponent, ImpactsPageComponent, BrandBiharPageComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
