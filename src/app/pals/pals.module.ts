import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PalsRoutingModule } from './pals-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraducirPipe } from './pipes/traduccion.pipe';
import { EditPageComponent } from './pages/edit-page/edit-page.component';



@NgModule({
  declarations: [
    ListPageComponent,
    NewPageComponent,
    LayoutPageComponent,TraducirPipe, EditPageComponent
  ],
  imports: [
    CommonModule,PalsRoutingModule,MaterialModule,ReactiveFormsModule,
  ]
})
export class PalsModule { }
