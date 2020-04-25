import { AuthGuard } from './services/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user/user.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: SignupFormComponent},
  { path: 'forgot', component: ForgotPasswordComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  { path: 'home', component: UserComponent},
  { path: 'no-access', component: NoAccessComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
