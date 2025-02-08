import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formName: any = 'Dashboard';
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (this.router.url == '/home') {
      
      this.formName = 'Dashboard';
    }else if (this.router.url == '/users') {
      
      this.formName = 'Users';
    }else if (this.router.url == '/mentors') {
      
      this.formName = 'Mentors';
    }else if (this.router.url == '/students') {
      
      this.formName = 'Students';
    }else if (this.router.url == '/licenses') {
      
      this.formName = 'Licenses';
    }else if (this.router.url == '/course') {
      
      this.formName = 'Course';
    }else if (this.router.url == '/pricingplans') {
      
      this.formName = 'Pricing Plans';
    }else if (this.router.url == '/masters') {
      
      this.formName = 'Masters';
    }
  }
}
