import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {
  error: any;
  data: any;
  i = 0;
  page = 1;
  pageSize = 5;
  collectionSize: number;
  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = "http://localhost:8040/getusersadmin";
    let response = this.http.post(url,null, { 'headers': headers });
    response.subscribe(
      data => {
        this.data = data;
        this.collectionSize = this.data.length;
      },
      error => {
        this.error = error;
      }
    )
  }

  edit(user, i){
    this.router.navigate(['/home/user/edit/', user.email])
  }

  remove(user, i){
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = "http://localhost:8040/deleteuser" + user.email;
    let response = this.http.delete(url, { 'headers': headers })
    response.subscribe(
      (data) => null,
      (error) => this.error = error
    )
  }

  getId(email){
    this.router.navigate(['/home/user/view', email])
  }
  
  get data_split(){
    return this.data.map((row, i) => ({id: i+1, ...row})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
  }

}
