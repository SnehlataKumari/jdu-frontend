import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SuperAdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
