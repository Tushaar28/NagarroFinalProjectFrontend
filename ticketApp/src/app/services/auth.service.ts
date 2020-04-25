import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { map } from "rxjs/operators";
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: any; 
  constructor(private http: Http, private router: Router) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials){
    return this.http.post('/api/authenticate', JSON.stringify(credentials))  //post contains the backend url for authentication
    .pipe(map(response => {
      let result = response.json();
      if(result && result.token){
        localStorage.setItem('token', result.token);
        return true;
      }
      return false;
    }));
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['/login'])
  }

  isLoggedIn(){
    return tokenNotExpired('token');
    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token')
    // if(!token)
    //   return false;
    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);
    // return !isExpired;
  }

  // get curentUser(){
  //   let token = localStorage.getItem('token');
  //   if(!token)
  //     return null;
    
  //   return new JwtHelper().decodeToken(token);
  // }
}
