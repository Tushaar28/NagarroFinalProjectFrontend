import { HomepagebodyComponent } from './homepagebody/homepagebody.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { EdituserComponent } from './edituser/edituser.component';
import { GetusersComponent } from './admin/getusers/getusers.component';
import { EditticketComponent } from './editticket/editticket.component';
import { ViewticketdetailComponent } from './viewticketdetail/viewticketdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { CreateticketComponent } from './createticket/createticket.component';
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
import { GetuserdetailComponent } from './admin/getuserdetail/getuserdetail.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: SignupFormComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'admin/tickets', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/users', component: GetusersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'home', component: HomepagebodyComponent, canActivate: [AuthGuard] },
  { path: 'no-access', component: NoAccessComponent },
  { path: 'home/account', component: UserdetailComponent, canActivate: [AuthGuard]},
  { path: 'home/user/view/:id', component: GetuserdetailComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'home/user/edit/:id', component: EdituserComponent, canActivate: [AuthGuard] },
  { path: 'home/ticket/new', component: CreateticketComponent, canActivate: [AuthGuard] },
  { path: 'home/ticket/:id', component: ViewticketdetailComponent, canActivate: [AuthGuard] },
  { path: 'home/ticket/edit/:id', component: EditticketComponent, canActivate: [AuthGuard] },
  { path: 'home/tickets/all', component: ViewticketComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
