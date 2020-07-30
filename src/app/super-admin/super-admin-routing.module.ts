import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersPageComponent } from '../shared/components/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';
import { SuggestionQuestionsComponent } from '../shared/components/suggestion-questions/suggestion-questions.component';
import { AnswersComponent } from '../shared/components/answers/answers.component';
import { AuthGuard } from '../services/auth-guard.service';
import { AddSuggestionsComponent } from '../shared/components/add-suggestions/add-suggestions.component';
import { AddSuggestionsFormComponent } from '../shared/components/add-suggestions-form/add-suggestions-form.component';


const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children: [
          {
            path: 'users',
            component: UsersPageComponent
          },
          {
            path: 'suggestions',
            component: SuggestionQuestionsComponent,
          },
          {
            path: 'suggestions/:questionId/answers',
            component: AnswersComponent
          },
          {
            path: 'schemes',
            component: AddSuggestionsComponent
          },
          {
            path: 'add-scheme',
            component: AddSuggestionsFormComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
