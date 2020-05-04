import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { map } from 'rxjs/Operator/map'

@Component({
  selector: 'app-demoapi',
  templateUrl: './demoapi.component.html',
  styleUrls: ['./demoapi.component.css']
})
export class DemoapiComponent {
  chart: any = [];
  data: any;
  confirmed: any[] = [];
  active: any[] = [];
  deaths: any[] = [];
  recovered: any[] = [];
  country = "India"
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

  ngOnnit() {
    this.active = []
    this.confirmed = []
    this.recovered = []
    this.deaths = []

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

  submit(data) {
    this.active = []
    this.confirmed = []
    this.recovered = []
    this.deaths = []
    const url = "https://api.covid19api.com/live/country/" + data.field + "/status/confirmed/date/2020-04-03T00:00:00Z"
    let response = this.http.get(url);
    response.subscribe(
      (data) => {
        this.data = data;
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          this.confirmed.push(element.Confirmed)
          this.active.push(element.Active)
          this.deaths.push(element.Deaths)
          this.recovered.push(element.Recovered)
        }
      },
      (error) => console.log(error),
      () => {
        // console.log(this.confirmed)
        // console.log(this.active)
        // console.log(this.deaths)
        // console.log(this.recovered)

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: 'Corona Stats',
            datasets: [
              {
                label: 'Confirmed',
                data: this.confirmed,
                borderColor: 'red',
                fill: false
              },
              {
                label: 'Active',
                data: this.active,
                borderColor: 'blue',
                fill: false
              },
              {
                label: 'Deaths',
                data: this.deaths,
                borderColor: 'yellow',
                fill: false
              },
              {
                label: 'Recovered',
                data: this.recovered,
                borderColor: 'green',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                labelString: 'Date',
                display: true
              }],
              yAxes: [{
                labelString: 'Cases',
                display: true
              }]
            }
          }
        })
      })
  }
}
