import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './services/auth.service';
import { BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { UserComponent } from './user/user.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { ViewticketdetailComponent } from './viewticketdetail/viewticketdetail.component';
import { EditticketComponent } from './editticket/editticket.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoapiComponent } from './demoapi/demoapi.component';
import { GetusersComponent } from './admin/getusers/getusers.component';
import { GetuserdetailComponent } from './admin/getuserdetail/getuserdetail.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { HomepagebodyComponent } from './homepagebody/homepagebody.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { GraphDialogComponent } from './graph-dialog/graph-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    ForgotPasswordComponent,
    UserComponent,
    NoAccessComponent,
    CreateticketComponent,
    ViewticketComponent,
    AdminComponent,
    ViewticketdetailComponent,
    EditticketComponent,
    DemoapiComponent,
    GetusersComponent,
    GetuserdetailComponent,
    EdituserComponent,
    UserdetailComponent,
    HomepagebodyComponent,
    ConfirmationDialogComponent,
    GraphDialogComponent
  ],
  imports: [
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    GraphDialogComponent
  ],
  providers: [
    ViewticketComponent,
    CreateticketComponent,
    AuthService,
    //Only for mock backend. Remove in real app
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
