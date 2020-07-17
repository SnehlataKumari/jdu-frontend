import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersPageComponent } from '../shared/components/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';
import { SuggestionQuestionsComponent } from './components/suggestion-questions/suggestion-questions.component';
import { AnswersComponent } from './components/answers/answers.component';


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
        component: DashboardComponent,
        children: [
          {
            path: 'users',
            component: UsersPageComponent
          },
          {
            path: 'suggestions',
            component: SuggestionQuestionsComponent
          },
          {
            path: 'questions/:questionId/answers',
            component: AnswersComponent
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
