import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MastersComponent } from './components/masters/masters.component';
import { PricingplansComponent } from './components/pricingplans/pricingplans.component';
import { CourseComponent } from './components/course/course.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { StudentsComponent } from './components/students/students.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { UsersComponent } from './components/users/users.component';
import { MenuComponent } from './common-components/menu/menu.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'mentors',component:MentorsComponent},
  {path:'students',component:StudentsComponent},
  {path:'licenses',component:LicensesComponent},
  {path:'course',component:CourseComponent},
  {path:'pricingplans',component:PricingplansComponent},
  {path:'masters',component:MastersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
