import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getuserdetail',
  templateUrl: './getuserdetail.component.html',
  styleUrls: ['./getuserdetail.component.css']
})
export class GetuserdetailComponent implements OnInit {
  user: any;
  error: any;
  email = "";
  constructor(private activatedroute: ActivatedRoute,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params => {
          if(typeof params['id'] !== undefined)
            this.email = params['id']
          else
            this.email = ""
      }
    )
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
    this.router.navigate(['/admin/users'])
  }
}
