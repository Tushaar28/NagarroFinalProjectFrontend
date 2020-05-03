import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoapi',
  templateUrl: './demoapi.component.html',
  styleUrls: ['./demoapi.component.css']
})
export class DemoapiComponent {
  data = "dummy";
  countries: any = []
  states: any = []
  constructor(private http: HttpClient) { 
    //const headers = new HttpHeaders();
    // const quota = "http://battuta.medunes.net/api/quota/?key=d3efa1d399e23647962f8d096894d1ca"
    // const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
    // const battuta_key = "d3efa1d399e23647962f8d096894d1ca";
    // // headers.set('Accept', 'application/json')
    // // .set('api-token', 'uedfbaqmePVpnU-Ui9ktW2Cwbq477q0tDSOPItzbGBJspMmNNeVWBF3wCPoVv8kQPuc')
    // // .set('user-email', 'mukeshrai641@gmail.com');

    // let response = this.http.get(battuta_url_countries);
    // response.subscribe(
    //   (data) => {
    //     this.countries = data;
    //     //console.log(this.countries)
    //   }
    // )
  }

    // onSelectCountry(value){
    //   console.log(value)
    //   const battuta_url_states = "http://battuta.medunes.net/api/region/" + value + "/all/?key=d3efa1d399e23647962f8d096894d1ca";
    //   let response = this.http.get(battuta_url_states);
    //   response.subscribe(
    //     (data) => {
    //       this.states = data;
    //     }
    //   )
    // }

    submit(data){
      console.log(data);
    }
}
