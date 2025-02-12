import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formName: any = 'Dashboard';
  loginUser:any='';
  // isShowMenu: boolean = true; // Example value
  // @Output() <isShowMenu:false>EventEmitter;
  @Output() isShowMenu = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  ngOnInit(): void {
    // debugger;
    this.loginUser=localStorage?.['loginUser'];//.toUpperCase()
    // this.loginUser='Aman Rajbhar';
    
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

  menuActive: boolean = true;
  toggleMenu(event: Event) {
    //debugger;
    event.stopPropagation(); // Prevents the click from propagating to the document
    this.menuActive = !this.menuActive;
    // this.isShowMenu=false;
    this.isShowMenu.emit(this.menuActive);
  }
   // Close menu on any outside click
    @HostListener('document:click', ['$event'])
    onClickOutside() {
      this.menuActive = false;
      this.isShowMenu.emit(this.menuActive);
    }
}
