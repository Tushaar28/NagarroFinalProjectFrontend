import * as html2pdf from 'html2pdf.js'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  constructor(private router: Router,
    private http: HttpClient,
    private activatedroute: ActivatedRoute) {
  }

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
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'id': localStorage.getItem('id'), 'Accept': 'application/json' }
    const url = "http://localhost:8040/viewticket/" + this.id
    let response = this.http.get(url, { 'headers': headers })
    response.subscribe(
      (data) => {
        this.data = data;
        //console.log(this.data)
      },
      (error) => {
        this.error = error;
        console.log(this.error)
      },
    )
  }

  clickEdit(){
    this.router.navigate(['/home/ticket/edit', this.data.id])
  }
  clickBack(){
    this.router.navigate(['/home/tickets/all'])
  }
  clickPrint(){
    const options = {
      filename: 'Ticket Details.pdf',
      image: { type: 'jpeg' },
      jsPDF: { orientation: 'landscape' }
    }

    const element = document.getElementById("details")
    html2pdf()
    .from(element)
    .set(options)
    .save()
  }
}


