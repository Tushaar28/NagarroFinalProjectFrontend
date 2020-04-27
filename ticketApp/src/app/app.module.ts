import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RegCnfComponent } from './reg-cnf/reg-cnf.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './services/auth.service';
import { BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { UserComponent } from './user/user.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { CnfticketComponent } from './cnfticket/cnfticket.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    RegCnfComponent,
    ForgotPasswordComponent,
    AdminComponent,
    UserComponent,
    NoAccessComponent,
    CreateticketComponent,
    ViewticketComponent,
    CnfticketComponent,
    NotfoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RouterModule,
    AuthService,
    //Only for mock backend. Remove in real app
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
