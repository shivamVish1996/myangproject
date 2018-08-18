import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  email;
   formdata;
pas;
dis;

employees = [
  {
    email: '',
    pass:''
  }
];

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

    if(this.email != "" && this.pas != "")
    {
        this.dis = this.email+" Added successful";
        this.employees.push({
          email: this.email,
          pass: this.pas
        });
    }
      else
      this.dis = "Invalid Data";
  }

  onItemAdded(itemData: {itemName: string, itemDesig: string}){
    this.employees.push({
      email: itemData.itemName,
      pass: itemData.itemDesig
    });
    
  }
  onItemDeleted(index: number){
    this.employees.splice(index, 1);
  }
}
