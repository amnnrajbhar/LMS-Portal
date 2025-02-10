import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loginUser:any='';
  constructor(private router: Router) { }
  ngOnInit(): void {
    // this.loginUser='Aman Rajbhar';
    this.loginUser=localStorage?.['loginUser'];
  }
  onLogout() {
    
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
