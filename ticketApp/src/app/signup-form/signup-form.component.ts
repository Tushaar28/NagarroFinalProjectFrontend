import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{
  showConfirmation = false;
  error: any = null;
  data: any;
  constructor(private http: HttpClient, private router: Router){}
  ngOnInit() {
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
  submit(values){
    this.showConfirmation = true;
    this.data = values
  }

  clickConfirm(){
    let error: boolean;
    let url = "http://localhost:8040/register"
    let response = this.http.post(url, this.data);
    response.subscribe(
      (data: Response) => this.router.navigate(['/login']),
      (error) => {
        this.error = error;
        console.log(this.error.error.message)
      }
    )
  }

  clickEdit(){
    this.data = null;
    this.showConfirmation = false;
  }
  
}
