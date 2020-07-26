import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompnayListComponent } from './compnay-list/compnay-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'companyProfiles', pathMatch: 'full'},
  { path: 'companyDetails', component: CompnayListComponent, pathMatch: 'full' },
  { path: 'companyProfiles', component: CompanyDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
