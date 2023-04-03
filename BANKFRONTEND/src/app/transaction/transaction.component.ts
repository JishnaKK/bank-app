import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  datenew:any=new Date()

Transactions:any=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    var acno=JSON.parse(localStorage.getItem('currentaccountnumber')||'')
    this.http.post('http://localhost:3000/transaction',{
      "acno":acno
    })
    .subscribe((result:any)=>{
      console.log("RESULT:",result)
      this.Transactions=result.transaction
      console.log('Transactions',this.Transactions)
    })
  }

}

