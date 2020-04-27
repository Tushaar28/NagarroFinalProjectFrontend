import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {
  arr: any;

  constructor(private router: Router,
    private http: HttpClient) {
    //const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
   }

  ngOnInit(): void {
    
  }

  onClickReset(){
    this.router.navigate['/home'];
  }

  submit(values){
    this.arr = values;
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id')};
    // headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // headers.set('Id', localStorage.getItem('id'));
    // headers.set('Accept', 'application/json');
    const url = 'http://localhost:8040/addticket'
    let response = this.http.post(url, values, { headers });
    response.subscribe((data: Response)=>console.log(data))
    setTimeout(()=> this.router.navigate(['/cnfticket']), 3000);
  }

}