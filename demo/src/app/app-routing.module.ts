import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SchoolComponent } from './registration/school/school.component';
import { SchoolLoginComponent } from './login/school-login/school-login.component';
import { StudentComponent } from './registration/student/student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { InquiriesComponent } from './school-dashboard/inquiries/inquiries.component';
import { SchoolProfileComponent } from './school-profile/school-profile.component';
import { BookmarkComponent } from './student-dashboard/bookmark/bookmark.component';
import { AdminComponent } from './admin/admin.component';
import { EnrollmentPageComponent } from './enrollment-page/enrollment-page.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { VerificationComponent } from './verification/verification.component';


const routes: Routes = [
  {path: 'getStarted',  title: 'Edu-Aksyon | Get Started', component: GetStartedComponent},
  {path: 'login',  title: 'Edu-Aksyon | Login', component: LoginComponent},
  {path: 'registration',  title: 'Edu-Aksyon | Registration', component: RegistrationComponent},
  {path: 'schoolRegistration',  title: 'Edu-Aksyon | School Registration', component: SchoolComponent},
  {path: 'schoolLogin',  title: 'Edu-Aksyon | School Login', component: SchoolLoginComponent},
  {path: 'schoolDashboard',  title: 'Edu-Aksyon | School Dashboard', component: SchoolDashboardComponent},
  {path: 'studentRegistration',  title: 'Edu-Aksyon | Student Registration', component: StudentComponent},
  {path: 'studentDashboard',  title: 'Edu-Aksyon | Student Dashboard', component: StudentDashboardComponent},
  {path: 'inquiries',  title: 'Edu-Aksyon | Inquiries ', component: InquiriesComponent},
  {path: 'schoolProfile',  title: 'Edu-Aksyon | School Profile', component: SchoolProfileComponent},
  {path: 'bookmarks',  title: 'Edu-Aksyon | Bookmarks', component: BookmarkComponent},
  {path: 'admin',  title: 'Edu-Aksyon | Admin', component: AdminComponent},
  {path: 'enrollmentPage',  title: 'Edu-Aksyon | Admin', component: EnrollmentPageComponent},
  {path: 'verification',  title: 'Edu-Aksyon | Verification', component: VerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
