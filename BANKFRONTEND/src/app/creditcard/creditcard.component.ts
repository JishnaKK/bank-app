import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  FirstName:any
  LastName:any
  Age:any
  PanCard:any
  Aadhar:any
  dummyarray:any=[]
  AccountNumber: any;
  creditDatabase: any={}
  buttontest:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  creditCardfun(){
this.buttontest = true

  this.creditDatabase[this.AccountNumber]={
    "FirstName":this.FirstName,
    "LastName":this.LastName,
    "Age":this.Age,
    "PanCard":this.PanCard,
    "Aadhar":this.Aadhar
  }

  alert("applied successfully")

  this.dummyarray.push({
    "FirstName":this.FirstName,
    "LastName":this.LastName,
    "Age":this.Age,
    "panCard":this.PanCard,
    "Aadhar":this.Aadhar
  })
  console.log(this.creditDatabase)
  console.log(this.dummyarray)
}
}
