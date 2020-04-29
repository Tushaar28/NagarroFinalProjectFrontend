import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: any;
  token: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    if (token) {
      let jwt = new JwtHelper()
      this.currentUser = jwt.decodeToken(token)
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.currentUser = null;
    this.router.navigate(['/login'])
  }
  isLoggedIn() {
    return tokenNotExpired('token');
  }
}
