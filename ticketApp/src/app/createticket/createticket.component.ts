import { MatDialog } from '@angular/material/dialog';
import { GraphDialogComponent } from './../graph-dialog/graph-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent {
  countries: any = []
  showConfirmation = false;
  ticketTypes: string[] = ["Travel Tickets", "Hotel Stay", "Work Permit", "Visa"]
  arr: any;
  error: Boolean = false;
  //data: Response;
  constructor(private router: Router,
    private http: HttpClient,
    public dialog: MatDialog) { }

   ngOnInit() {
    const quota = "http://battuta.medunes.net/api/quota/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_url_countries = "http://battuta.medunes.net/api/country/all/?key=d3efa1d399e23647962f8d096894d1ca"
    const battuta_key = "d3efa1d399e23647962f8d096894d1ca";
    let response = this.http.get(battuta_url_countries);
    response.subscribe(
      (data) => this.countries = data
    )
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
        console.log(this.arr.id)
        this.router.navigate(['/home/ticket', this.arr.id])
        this.showConfirmation = true;
      },
      error => this.error = true
      )
  }

  openDialog(values){
    console.log(values)
    const dialogRef = this.dialog.open(GraphDialogComponent, {
      height: '600px',
      width: '600px',
      data: values.destCountry
      })

    dialogRef.afterClosed().subscribe(
      result => {
        console.log("Yes")
        if(result)
          this.submit(values)
      }
    )
  }

}