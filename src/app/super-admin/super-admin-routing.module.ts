import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersPageComponent } from '../shared/components/users-page/users-page.component';


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
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
