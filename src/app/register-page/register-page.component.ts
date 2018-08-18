import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  email;
   formdata;
   pas;
   dis
  constructor() { }

  ngOnInit() {

    this.formdata = new FormGroup({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      emailid: new FormControl(""),
      pass: new FormControl(""),
      cpass: new FormControl("")
   });
   
  }

  onClickSubmit(data) {
    this.email = data.email
    if(this.email != undefined){
    this.dis = this.email+" is registered...";
    }
  }

}
