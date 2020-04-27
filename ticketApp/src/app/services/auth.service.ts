import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: any;
  constructor(private router: Router) {
    let token = sessionStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  logout(){
    sessionStorage.removeItem('token');
    this.currentUser = null;
    this.router.navigate(['/login'])
  }

  isLoggedIn(){
    let token = sessionStorage.getItem('token');
    if(!token)
      return false;
    return !tokenNotExpired(token);
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
