import { AuthService } from './../services/auth.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  invalidLogin: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService)
    {

    }

    signIn(credentials){
      this.authService.login(credentials)
      .subscribe(result => {
        if(result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/home']); //URL of user homepage
        }
        else
          this.invalidLogin = true;
      });
    }
}
