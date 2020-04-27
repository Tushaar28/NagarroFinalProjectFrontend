import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {

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
    let arr = values;
    const url = 'http://localhost:8040/addTicket'
    let response = this.http.post(url, values);
    response.subscribe((data: Response)=>console.log(data))
    setTimeout(()=> this.router.navigate(['/cnfticket']), 3000);
  }

}
