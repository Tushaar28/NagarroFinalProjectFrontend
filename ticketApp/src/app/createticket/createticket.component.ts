import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent {
  arr: any;
  error: Boolean = false;
  //data: Response;
  constructor(private router: Router,
    private http: HttpClient) {
    //const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
   }

  onClickReset(){
    this.router.navigate['/home'];
  }

  submit(values){
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = 'http://localhost:8040/addticket'
    let response = this.http.post(url, values, { 'headers': headers });
    response.subscribe(
      data => {
        console.log(data);
        this.arr = data;
      },
      error => this.error = true
      )
    if(!this.error)
      setTimeout(() => {
        this.router.navigate(['/cnfticket'])
      }, 1000);
  }

}