import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SchoolComponent } from './registration/school/school.component';
import { StudentComponent } from './registration/student/student.component';

const routes: Routes = [
  {path: 'login',  title: 'Edu-Aksyon | Login', component: LoginComponent},
  {path: 'registration',  title: 'Edu-Aksyon | Registration', component: RegistrationComponent},
  {path: 'schoolRegistration',  title: 'Edu-Aksyon | School Registration', component: SchoolComponent},
  {path: 'studentRegistration',  title: 'Edu-Aksyon | School Registration', component: StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
