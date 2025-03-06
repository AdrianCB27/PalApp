import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutPageComponent,
        children:[
            { path:'new-pal', component: NewPageComponent},
            { path:'edit/:id', component: EditPageComponent},
            { path:'list', component: ListPageComponent},
            { path:'**', redirectTo: 'list'},
        ]

    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalsRoutingModule { }