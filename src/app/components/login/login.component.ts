import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { HttpserviceService } from 'src/app/services/httpservice.service';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  userInfo: any;
  membersList: any[] = [];
  constructor(private router: Router, private http: HttpserviceService) { }
  ngOnInit(): void {
    //debugger;
    //const storedUser = localStorage.getItem("currentUser");
    this.getMembersList();
    //this.userInfo = storedUser ? JSON.parse(storedUser) : null;
    console.log('UserInfo : ' + this.userInfo);
  }
  getMembersList() {
    this.http.getMembersList().subscribe((data: any) => {
      this.membersList = data;
      console.log(this.membersList);
    });
  }

  onSubmit(form: any) {
    debugger;
    this.userInfo = this.membersList.filter(m => m.username == form.value.username);
    if (form.value.username != '' && form.value.password != '') {
      if (this.userInfo.length > 0) {
        if (this.userInfo[0].username == form.value.username && this.userInfo[0].password == form.value.password) {
          this.router.navigate(['/home']);
          localStorage.setItem("loginUser",form.value.username);
        } else {
          alert('Invalid Credentials');
        }
      } else {
        alert('User not found please signup');
      }
    } else {
      alert('Please enter username & password')
    }

  }
}
