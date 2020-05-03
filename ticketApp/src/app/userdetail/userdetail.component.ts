import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: any;
  email: any;
  error: any;
  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('id')
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json' }
    const url = "http://localhost:8040/getuserdetail/" + this.email
    let response = this.http.get(url, { 'headers': headers })
    response.subscribe(
      (data) => this.user = data,
      (error) => this.error = error
    )
  }
  clickEdit(){
    this.router.navigate(['/home/user/edit/', this.email])
  }

  clickBack(){
    this.router.navigate(['/home'])
  }

}
