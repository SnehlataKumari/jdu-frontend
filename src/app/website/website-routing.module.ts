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
        path: 'impacts',
        pathMatch: 'full',
        component: ImpactsPageComponent
      },
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
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
