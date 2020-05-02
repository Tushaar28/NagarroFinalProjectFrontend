import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error: any;
  data: any;
  i = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = "http://localhost:8040/getticketadmin";
    let response = this.http.post(url,null, { 'headers': headers });
    response.subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        this.error = error;
        //console.log(error);
      }
    )
  }

  approve(ticket, i){
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = "http://localhost:8040/updateticket";
    const body = {
      "id": ticket.id,
      "status": 1,
    }
    let response = this.http.patch(url, body, { 'headers': headers })
    response.subscribe(
      data => console.log(data),
      error => console.log(error)
    )
    this.data[i].status = 1
    //console.log(ticket.dest)
  }

  reject(ticket, i){
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = "http://localhost:8040/updateticket";
    const body = {
      "id": ticket.id,
      "status": -1,
    }
    let response = this.http.patch(url, body, { 'headers': headers })
    response.subscribe(
      data => console.log(data),
      error => console.log(error)
    )
    this.data[i].status = -1
  }

  processing(ticket, i){
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = "http://localhost:8040/updateticket";
    const body = {
      "id": ticket.id,
      "status": 0,
      "isProcessing": true
    }
    let response = this.http.patch(url, body, { 'headers': headers })
    response.subscribe(
      data => console.log(data),
      error => console.log(error)
    )
    this.data[i].isProcessing = true;
  }

}
