import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  data;
  success = null;
  error = null;
  constructor(private http: HttpClient,
    private router: Router) { }
  
    submit(f){
    this.data = f;
    const url = "http://localhost:8040/forgot"
    let response = this.http.post(url, this.data)
    response.subscribe(
      (data) =>this.success = true,
      (error) => this.error = error,
      () => setTimeout(() => this.router.navigate(['/login']), 2000)
    )
  }
}
