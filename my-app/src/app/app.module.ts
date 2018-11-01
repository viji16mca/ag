import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EmployeeViewComponent } from './Views/employee-view/employee-view.component';
import { EmployeeInsertComponent } from './Views/employee-insert/employee-insert.component';
import { EmployeeApiService } from './Service/employee-api.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    EmployeeViewComponent,
    EmployeeInsertComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClient, EmployeeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
