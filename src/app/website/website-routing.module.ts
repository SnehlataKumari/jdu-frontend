import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PrivateRoomPageComponent } from './components/private-room-page/private-room-page.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomePageComponent },
      { path: 'private-room', pathMatch: 'full', component: PrivateRoomPageComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
