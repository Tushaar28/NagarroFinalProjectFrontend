import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewticketComponent } from './../viewticket/viewticket.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewticketdetail',
  templateUrl: './viewticketdetail.component.html',
  styleUrls: ['./viewticketdetail.component.css']
})
export class ViewticketdetailComponent implements OnInit {
  id: any
  data: any
  error: any
  constructor(private ticket: ViewticketComponent,
    private http: HttpClient,
    public activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params => {
        if(typeof params['id'] !== undefined)
          this.id = params['id']
        else
          this.id = ''
      }
    )
    //console.log(this.id)
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'}
    const url = "http://localhost:8040/viewticket/" + this.id
    let response = this.http.get(url, { 'headers': headers })
    response.subscribe(
      (data) => {
        this.data = data;
        console.log(this.data)
      },
      (error) => {
        this.error = error;
        console.log(this.error)
      },
      () => console.log(this.data.type)
    )
  }

  submit(data){
    
  }
  getTicketType(){
    //console.log(this.data.type)
    return this.data.type;
  }



}
