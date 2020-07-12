import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { ClassesPageComponent } from './components/classes-page/classes-page.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';
import { SubjectsPageComponent } from './components/subjects-page/subjects-page.component';
import { PublicRoomComponent } from './components/public-room/public-room.component';
import { PrivateRoomComponent } from './components/private-room/private-room.component';
import { UsersPageComponent } from '../shared/components/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'subject', component: SubjectsPageComponent },
      { path: 'classes', component: ClassesPageComponent },
      { path: 'chapter', component: ChaptersPageComponent },
      { path: 'users', component: UsersPageComponent },
      { path: 'videos', component: VideosPageComponent },
      { path: 'public-room', component: PublicRoomComponent },
      { path: 'private-room', component: PrivateRoomComponent },
  ]},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
