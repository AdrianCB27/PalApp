import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,AuthRoutingModule,MaterialModule,ReactiveFormsModule
  ]
})
export class AuthModule { }
