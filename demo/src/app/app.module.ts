import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { SchoolProfileComponent } from './school-profile/school-profile.component';
import { BookmarkComponent } from './student-dashboard/bookmark/bookmark.component';
import { EnrollmentPageComponent } from './enrollment-page/enrollment-page.component';
import { VerificationComponent } from './school-dashboard/verification/verification.component';
import { GetStartedComponent } from './get-started/get-started.component';

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
    SchoolProfileComponent,
    BookmarkComponent,
    VerificationComponent,
    EnrollmentPageComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
