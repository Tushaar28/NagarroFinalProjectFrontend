import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component,Inject } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-dialog',
  templateUrl: './graph-dialog.component.html',
  styleUrls: ['./graph-dialog.component.css']
})
export class GraphDialogComponent {
  chart: any = [];
  data: any;
  confirmed: any[] = [];
  active: any[] = [];
  deaths: any[] = [];
  recovered: any[] = [];
  constructor(public dialogRef: MatDialogRef<GraphDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dest: string,
    private http: HttpClient) { }

    ngOnInit() {
      console.log("Entered Init")
      this.active = []
      this.confirmed = []
      this.recovered = []
      this.deaths = []
      const url = "https://api.covid19api.com/live/country/" + this.dest + "/status/confirmed/date/2020-04-03T00:00:00Z"
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
        console.log(this.confirmed)
        console.log(this.active)
        console.log(this.deaths)
        console.log(this.recovered)

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

  onNoClick(){
    this.dialogRef.close()
  }

}
