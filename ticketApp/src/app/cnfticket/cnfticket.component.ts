import { CreateticketComponent } from './../createticket/createticket.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnfticket',
  templateUrl: './cnfticket.component.html',
  styleUrls: ['./cnfticket.component.css']
})
export class CnfticketComponent implements OnInit {

  constructor(public ticket: CreateticketComponent) { 
    
  }

  ngOnInit(): void {
  }



}
