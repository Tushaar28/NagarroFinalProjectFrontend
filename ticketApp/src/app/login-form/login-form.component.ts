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
export class LoginFormComponent implements OnInit {
  invalidLogin: boolean;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService)
    {

    }
    ngOnInit(){
      const token = localStorage.getItem('token')
      if(token)
        this.router.navigate(['/home'])
      const url = "http://localhost:8040/addadmin"
      let response = this.http.get(url);
      response.subscribe(
        data => null,
        error => null
      )
    }
    signIn(credentials){
      const url = "http://localhost:8040/authenticate";
      let response = this.http.post(url, credentials);
      response.subscribe(
        (data: Response) => {
        localStorage.setItem('token', data["jwt"]);
        localStorage.setItem('id', credentials['userName']);
        },
        error => this.invalidLogin = true
        );
      if(!localStorage.getItem('token'))
        this.invalidLogin = true;
      else{
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/home']); //URL of user homepage
      }
    }
}
