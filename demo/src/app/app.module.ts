import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SchoolComponent } from './registration/school/school.component';
import { StudentComponent } from './registration/student/student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { SchoolLoginComponent } from './login/school-login/school-login.component';
import { InquiriesComponent } from './school-dashboard/inquiries/inquiries.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolComponent,
    StudentComponent,
    StudentDashboardComponent,
    SchoolDashboardComponent,
    SchoolLoginComponent,
    InquiriesComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
