import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomePageComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
