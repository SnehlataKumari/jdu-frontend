import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { ClassesPageComponent } from './components/classes-page/classes-page.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';
import { SubjectsPageComponent } from './components/subjects-page/subjects-page.component';
import { LiveStreamComponent } from './components/live-stream/live-stream.component';

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
      { path: 'live-stream', component: LiveStreamComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
