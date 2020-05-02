import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css']
})
export class ViewticketComponent implements OnInit {
  error: any;
  data: any;
  id: any;
  page = 1;
  pageSize = 5;
  collectionSize: number;
  constructor(private http: HttpClient,
    public router: Router) { }

  ngOnInit(): void {
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = 'http://localhost:8040/getticket'
    let response = this.http.post(url,null, { 'headers': headers });
    response.subscribe(
      data => {
        this.data = data;
        //console.log(this.data);
        this.collectionSize = this.data.length;
      },
      error => {
        this.error = error;
        console.log(error);
      }
    )
  }

  getId(id){
    this.id = id
    this.router.navigate(['/home/ticket', this.id])
  }

  returnId(){
    return this.id;
  }

  clickEdit(id){
    this.router.navigate(['/home/ticket/edit', id])
  }

}
