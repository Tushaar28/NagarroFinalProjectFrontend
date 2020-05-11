import * as html2pdf from 'html2pdf.js';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{
  countries: any = []
  states: any = []
  showConfirmation = false;
  error: any = null;
  data: any;
  constructor(private http: HttpClient, private router: Router){}
  ngOnInit() {
    const quota = "http://battuta.medunes.net/api/quota/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_key = "d3efa1d399e23647962f8d096894d1ca";
    let response = this.http.get(battuta_url_countries);
    response.subscribe(
      (data) => this.countries = data
    )
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
  
  clickPrint(){
    const options = {
      filename: 'User Details.pdf',
      image: { type: 'jpeg' },
      jsPDF: { orientation: 'portrait' }
    }

    const element = document.getElementById("details")
    html2pdf()
    .from(element)
    .set(options)
    .save()
  }

  onSelectCountry(value){
    const battuta_url_states = "http://battuta.medunes.net/api/region/" + value + "/all/?key=d3efa1d399e23647962f8d096894d1ca";
    let response = this.http.get(battuta_url_states);
    response.subscribe(
      (data) => {
        this.states = data;
      }
    )
  }
}
