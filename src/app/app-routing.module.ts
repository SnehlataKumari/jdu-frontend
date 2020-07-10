import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'auth',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
  { path: 'admin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
