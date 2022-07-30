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


const routes: Routes = [
  {path: 'login',  title: 'Edu-Aksyon | Login', component: LoginComponent},
  {path: 'registration',  title: 'Edu-Aksyon | Registration', component: RegistrationComponent},
  {path: 'schoolRegistration',  title: 'Edu-Aksyon | School Registration', component: SchoolComponent},
  {path: 'schoolLogin',  title: 'Edu-Aksyon | School Login', component: SchoolLoginComponent},
  {path: 'schoolDashboard',  title: 'Edu-Aksyon | Student Dashboard', component: SchoolDashboardComponent},
  {path: 'studentRegistration',  title: 'Edu-Aksyon | Student Registration', component: StudentComponent},
  {path: 'studentDashboard',  title: 'Edu-Aksyon | Student Dashboard', component: StudentDashboardComponent},
  {path: 'inquiries',  title: 'Edu-Aksyon | Student Dashboard', component: InquiriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
