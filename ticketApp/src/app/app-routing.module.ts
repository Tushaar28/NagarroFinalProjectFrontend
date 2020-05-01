import { EditticketComponent } from './editticket/editticket.component';
import { ViewticketdetailComponent } from './viewticketdetail/viewticketdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CnfticketComponent } from './cnfticket/cnfticket.component';
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

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: SignupFormComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'admin/tickets', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'home', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'no-access', component: NoAccessComponent },
  { path: 'home/ticket/new', component: CreateticketComponent },
  { path: 'home/ticket/:id', component: ViewticketdetailComponent },
  { path: 'home/ticket/edit/:id', component: EditticketComponent },
  { path: 'home/tickets/all', component: ViewticketComponent },
  { path: 'cnfticket', component: CnfticketComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
