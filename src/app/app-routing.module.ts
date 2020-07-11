import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompnayListComponent } from './compnay-list/compnay-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'companyList', pathMatch: 'full'},
  { path: 'companyList', component: CompnayListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
