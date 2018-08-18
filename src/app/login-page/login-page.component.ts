import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email;
   formdata;
pas;
dis;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("shivam@xoriant.com"),
      pass: new FormControl("shivam123")
   });
  }

  onClickSubmit(data) {
    this.email = data.emailid;
    this.pas = data.pass;

    if(this.email == "shivam@xoriant.com" && this.pas == "shivam123")
        this.dis = this.email+" login successful";
      else
      this.dis = this.email+" is an Invalid user";

  }

}
