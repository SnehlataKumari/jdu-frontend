import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PrivateRoomPageComponent } from './components/private-room-page/private-room-page.component';
import { AuthGuard } from '../services/auth-guard.service';
import { SuggestionPageComponent } from './components/suggestion-page/suggestion-page.component';
import { YatrayenPageComponent } from './components/yatrayen-page/yatrayen-page.component';
import { ImpactsPageComponent } from './components/impacts-page/impacts-page.component';
import { BrandBiharPageComponent } from './components/brand-bihar-page/brand-bihar-page.component';
import { DocumentsPageComponent } from './components/documents-page/documents-page.component';
import { ShowMessageComponent } from './components/show-message/show-message.component';
import { SharedModule } from '../shared/shared.module';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { ShowYatraComponent } from '../shared/components/show-yatra/show-yatra.component';
import { SpeechesPageComponent } from './components/speeches-page/speeches-page.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomePageComponent },
      {
        path: 'private-room',
        canActivate: [AuthGuard],
        pathMatch: 'full',
        component: PrivateRoomPageComponent
      },
      {
        path: 'suggestions',
        pathMatch: 'full',
        component: SuggestionPageComponent
      },
      {
        path: 'yatrayen',
        pathMatch: 'full',
        component: YatrayenPageComponent
      },
      {
        path: 'yatrayen/:id',
        pathMatch: 'full',
        component: ShowYatraComponent
      },
      {
        path: 'speeches',
        pathMatch: 'full',
        component: SpeechesPageComponent
      },
      // {
      //   path: 'impacts',
      //   pathMatch: 'full',
      //   component: ImpactsPageComponent
      // },
      {
        path: 'brand-bihar',
        pathMatch: 'full',
        component: BrandBiharPageComponent
      },
      {
        path: 'documents',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: DocumentsPageComponent
      },
      {
        path: 'messages',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: ShowMessageComponent
      },
    ],
  },
  { path: 'users-dashboard', pathMatch: 'full', component: UsersDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
