import { Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { RegCnfComponent } from './../reg-cnf/reg-cnf.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router){}
  ngOnInit() {
    //console.log("Clicked");
    const headers = new HttpHeaders();
    const url1 = 'https://jsonplaceholder.typicode.com/users';
    const url2 = 'https://www.universal-tutorial.com/api/countries/';
    const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_key = "d3efa1d399e23647962f8d096894d1ca";
    // headers.set('Accept', 'application/json')
    // .set('api-token', 'uedfbaqmePVpnU-Ui9ktW2Cwbq477q0tDSOPItzbGBJspMmNNeVWBF3wCPoVv8kQPuc')
    // .set('user-email', 'mukeshrai641@gmail.com');

    // let response = this.http.get(battuta_url_countries);
    // response.subscribe((data: Response)=>console.log(data));
  }
  data;
  submit(values){
    let error: Boolean;
    //console.log(values);
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    let url = "http://localhost:8040/register"
    // const headers = new HttpHeaders();
    // headers.set('Authorization', 'Bearer ' + token);
    // headers.set('Accept', 'application/json');
    let response = this.http.post(url, values);
    response.subscribe((data: Response)=>console.log(data))
    //After successful registration
    error = true;
    setTimeout(()=> this.router.navigate(['/login']), 3000);
    
  }
  
}
