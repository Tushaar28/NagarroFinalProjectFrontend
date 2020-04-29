import { CreateticketComponent } from './../createticket/createticket.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cnfticket',
  templateUrl: './cnfticket.component.html',
  styleUrls: ['./cnfticket.component.css']
})
export class CnfticketComponent implements OnInit {
  data: any;
  constructor(private ticket: CreateticketComponent) { 
    this.data = ticket.arr;
  }

  ngOnInit(): void {
  }
  show(){
    console.log(this.data);
  }
}
