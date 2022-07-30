import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SchoolComponent } from './registration/school/school.component';
import { StudentComponent } from './registration/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
