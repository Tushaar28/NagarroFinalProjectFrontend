import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editticket',
  templateUrl: './editticket.component.html',
  styleUrls: ['./editticket.component.css']
})
export class EditticketComponent implements OnInit {
  id: any;
  data: any;
  error: any = null;
  constructor(private router: Router,
    private http: HttpClient,
    private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      params => {
        if (typeof params['id'] !== undefined)
          this.id = params['id']
        else
          this.id = ''
      }
    )
    //console.log(this.id)
  }

  submit(data){
    const headers = {'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json'};
    const url = 'http://localhost:8040/editticket/' + this.id
    let response = this.http.patch(url, data, { 'headers': headers })
    response.subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/home/tickets/all']);
      },
      (error) => this.error = error
    )
    //console.log("Button clicked")
  }

  onClickReset(){
    this.router.navigate['/home/tickets/all'];
  }
}
