import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService)
    {

    }

    signIn(credentials){
      
      //console.log(credentials);
      let url = "http://localhost:8040/authenticate";
      let response = this.http.post(url, credentials);
      response.subscribe((data: Response) => localStorage.setItem('token', data["jwt"]));
      if(!localStorage.getItem('token'))
        this.invalidLogin = true;
      else{
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/home']); //URL of user homepage
      }
      // this.authService.login(credentials)
      // .subscribe(result => {
      //   if(result){
      //     let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      //     this.router.navigate([returnUrl || '/home']); //URL of user homepage
      //   }
      //   else
      //     this.invalidLogin = true;
      // });
    }
}
