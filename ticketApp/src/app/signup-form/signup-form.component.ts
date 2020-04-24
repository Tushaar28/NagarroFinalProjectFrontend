import { RegCnfComponent } from './../reg-cnf/reg-cnf.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  data;
  submit(f){
    this.data = f;
    console.log(this.data.value);
  }
  
}
