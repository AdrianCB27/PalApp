import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,SweetAlert2Module
  ],
  exports:[SweetAlert2Module]
})
export class SharedModule { }
