import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editticket',
  templateUrl: './editticket.component.html',
  styleUrls: ['./editticket.component.css']
})
export class EditticketComponent implements OnInit {
  id: any;
  data: any;
  error: any = null;
  countries: any = []
  constructor(private router: Router,
    private http: HttpClient,
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params => {
        if (typeof params['id'] !== undefined)
          this.id = params['id']
        else
          this.id = ''
      }
    )
    const quota = "http://battuta.medunes.net/api/quota/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_key = "d3efa1d399e23647962f8d096894d1ca";
    let response = this.http.get(battuta_url_countries);
    response.subscribe(
      (data) => this.countries = data
    )
  }

  submit(data){
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = 'http://localhost:8040/editticket/' + this.id
    let response = this.http.patch(url, data, { 'headers': headers })
    response.subscribe(
      (data) => {
        this.router.navigate(['/home/tickets/all']);
      },
      (error) => this.error = error
    )
  }

  onClickReset(){
    this.router.navigate['/home/tickets/all'];
  }
}
