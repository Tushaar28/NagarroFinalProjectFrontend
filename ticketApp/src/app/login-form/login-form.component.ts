import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  data;
  submit(f){
    this.data=f;
    console.log(this.data.value);
  }
}
