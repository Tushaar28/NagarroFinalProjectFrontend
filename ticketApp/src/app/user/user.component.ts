import { ConfirmationDialogComponent } from './../confirmation-dialog/confirmation-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: any;
  token: any;
  resp;
  error = null;

  constructor(private router: Router,
    private http: HttpClient,
    public dialog: MatDialog) { }

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

  delete() {
    const email = localStorage.getItem('id')
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json' };
    const url = 'http://localhost:8040/deleteuser/' + email
    let response = this.http.delete(url, { 'headers': headers })
    response.subscribe(
      (data) => {
        this.resp = data;
        this.logout()
      },
      (error) => this.error = error
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you want to delete your account?"
    })
    
    dialogRef.afterClosed().subscribe(
      result => {
        if (result)
          this.delete()
      }
    )
  }
}
