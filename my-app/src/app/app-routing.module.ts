import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeViewComponent } from './Views/employee-view/employee-view.component';
import { EmployeeInsertComponent } from './Views/employee-insert/employee-insert.component';

const routes: Routes = [
   { path: '', component: EmployeeViewComponent},
  { path: 'home', component: EmployeeViewComponent},
  { path: 'employee', component: EmployeeViewComponent},
     { path: 'employee/:id', component: EmployeeInsertComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
