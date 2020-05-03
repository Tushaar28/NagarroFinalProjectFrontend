import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  countries: any = []
  states: any = []
  email = ""
  user: any;
  error: any;
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
    const quota = "http://battuta.medunes.net/api/quota/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_key = "d3efa1d399e23647962f8d096894d1ca";
    let res = this.http.get(battuta_url_countries);
    res.subscribe(
      (data) => this.countries = data
    )
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json' }
    const url = "http://localhost:8040/getuserdetail/" + this.email
    let response = this.http.get(url, { 'headers': headers })
    response.subscribe(
      (data) => this.user = data,
      (error) => this.error = error
    )
  }

  submit(data){
    
  }

  clickCancel(){
    this.router.navigate(['/home/user/view/', this.email])
  }

  onSelectCountry(value){
    console.log(value)
    const battuta_url_states = "http://battuta.medunes.net/api/region/" + value + "/all/?key=d3efa1d399e23647962f8d096894d1ca";
    let response = this.http.get(battuta_url_states);
    response.subscribe(
      (data) => {
        this.states = data;
      }
    )
  }
}
