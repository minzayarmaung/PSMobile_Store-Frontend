import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ForgotpasswordComponentComponent } from './components/forgotpassword-component/forgotpassword-component.component';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { UserListComponent } from './components/user-component/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponentComponent },
  { path: 'alluserlist', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
