import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { ClassesPageComponent } from './components/classes-page/classes-page.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'users', component: UsersPageComponent },
      { path: 'classes', component: ClassesPageComponent },
      { path: 'videos', component: VideosPageComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
