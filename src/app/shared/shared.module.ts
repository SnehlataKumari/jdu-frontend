import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportModule } from '../material-import.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolePipe } from './pipes/role.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BootstrapImportModule } from '../bootstrap-import.module';
import { ConstantComponent } from './components/constant/constant.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    SideMenuComponent,
    CreateUserFormComponent,
    UsersPageComponent,
    RolePipe,
    ConstantComponent,
    UploadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    BootstrapImportModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CommonModule,
    MaterialImportModule,
    BootstrapImportModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SideMenuComponent,
    UsersPageComponent,
    RolePipe,
    UploadComponent,
    ConstantComponent,
  ]
})
export class SharedModule { }
