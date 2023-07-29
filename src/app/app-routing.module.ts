import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'user/home', pathMatch: 'full'},
  { path: 'user/home', component: HomeComponent, title: 'Epay Login'},
  { path: 'user/login', component: LoginComponent, title: 'Epay Login'},
  { path: 'user/register', component: RegisterComponent, title: 'Epay Register'},
  { path: 'user/dashboard', component: DashboardComponent, title: 'Epay DashBoard', children:[{
    path: 'user/profile', component: ProfileComponent, title: 'User Profile' 

  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
