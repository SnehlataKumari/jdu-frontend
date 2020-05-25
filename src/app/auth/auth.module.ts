import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModule } from '../material-import.module';
import { ForgotPasswordPageComponent } from './components/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent
  }
];

@NgModule({
  declarations: [LoginFormComponent, ForgotPasswordPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialImportModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
