import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';

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
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DocumentsPageComponent } from './components/documents-page/documents-page.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ShowMessageComponent } from './components/show-message/show-message.component';
import { TranslateModule } from '@ngx-translate/core';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { SpeechesPageComponent } from './components/speeches-page/speeches-page.component';

@NgModule({
  declarations: [WebsiteComponent, HomePageComponent, LiveStreamPlayerComponent, HeaderComponent, FooterComponent, PrivateRoomPageComponent, BannerComponent, SuggestionPageComponent, YatrayenPageComponent, ImpactsPageComponent, BrandBiharPageComponent, DocumentsPageComponent, ShowMessageComponent, UsersDashboardComponent, SpeechesPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    WebsiteRoutingModule,
    SharedModule,
    NgxCaptchaModule,
    TranslateModule,
    IvyCarouselModule
  ]
})
export class WebsiteModule { }
