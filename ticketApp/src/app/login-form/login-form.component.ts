import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  submit(f){
    console.log(f.value["userName"]);
    console.log(f.value["password"])
  }
}
