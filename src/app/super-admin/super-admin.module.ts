import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SuggestionQuestionsComponent } from './components/suggestion-questions/suggestion-questions.component';
import { AnswersComponent } from './components/answers/answers.component';


@NgModule({
  declarations: [SuperAdminComponent, DashboardComponent, SuggestionQuestionsComponent, AnswersComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
