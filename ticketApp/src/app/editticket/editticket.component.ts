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
  error: any;
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
    console.log(this.id)
  }

  submit(data){
    
  }

  onClickReset(){
    this.router.navigate['/home/tickets/all'];
  }
}
