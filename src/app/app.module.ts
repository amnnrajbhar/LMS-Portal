import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { UsersComponent } from './components/users/users.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { StudentsComponent } from './components/students/students.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { CourseComponent } from './components/course/course.component';
import { PricingplansComponent } from './components/pricingplans/pricingplans.component';
import { MastersComponent } from './components/masters/masters.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { HeaderComponent } from './common-components/header/header.component';
import { DialogComponent } from './dialog/usersdialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { PricingplandialogComponent } from './dialog/pricingplandialog/pricingplandialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { PaginationComponent } from './common-components/pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UsersComponent,
    MentorsComponent,
    StudentsComponent,
    LicensesComponent,
    CourseComponent,
    PricingplansComponent,
    MastersComponent,
    MenuComponent,
    HeaderComponent,
    DialogComponent,
    PricingplandialogComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
