import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/HttpService/httpservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  constructor(private router: Router, private http: HttpserviceService) { }
  ngOnInit(): void {

  }

  onSubmit(form: any) {
    debugger;
    if (form.value.username != '' && form.value.password != '') {
      let user = { username: form.value.username, password: form.value.password };
      debugger;
      this.http.saveNewMember(user).subscribe(data => {
        debugger;
        alert('New Member Created Successfully');
        this.getMembersList();
        this.router.navigate(['/login']);
      });
      //localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      alert('Please enter username & password');
    }

  }

  getMembersList() {
    this.http.getMembersList().subscribe((data: any) => {
    });
  }
}
