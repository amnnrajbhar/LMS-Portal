import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/common-components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loginUser:any='';
  // @ViewChild(HeaderComponent) child: any
  // isShowMenu:any= false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    // this.loginUser='Aman Rajbhar';
    this.loginUser=localStorage?.['loginUser'];
  }
  onLogout() {
    
    this.router.navigate(['/login']);
    localStorage.clear();
  }
  menuActive: boolean = false;

  receiveMessage($event:any) {
    //debugger;
    this.menuActive = $event;
    //alert(this.menuActive);
  }
}
