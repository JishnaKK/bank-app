import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

const options={
  headers:new HttpHeaders
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
acno:any

accno:any
pswd:any
amount:any

accnow:any
pswdw:any
amountw:any
delacc:any
  constructor(private ds:AuthserviceService,private http:HttpClient,private route:Router) {

  }

  ngOnInit(): void {
    // document.body.className = "dashboard"
  }

  getOptions(){
    var token = JSON.parse(localStorage.getItem('token')||'')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('my-access-token',token)
      options.headers=headers
    }
    return options
  }
deposit(){
  var acno = this.accno
  var pswd=this.pswd
  var amt=this.amount

  const body={
    acno,
    pswd,
    amt
  }
  this.http.post('http://localhost:3000/deposit',body,this.getOptions())
  .subscribe((result:any)=>{
    alert(result.message)

  } , (result)=>{
      alert(result.error.message)

  })
}

withdraw(){
  var acno = this.accnow
  var pswd=this.pswdw
  var amt=this.amountw

  const body={
    acno,
    pswd,
    amt
  }
  this.http.post('http://localhost:3000/withdraw',body,this.getOptions())
  .subscribe((result:any)=>{
    alert(result.message)

  } , (result)=>{
      alert(result.error.message)

  })
}

// parent-child communication
Deleteaccount(){
  this.delacc=JSON.parse(localStorage.getItem("currentaccountnumber")||'')
}
cancel(){
  this.delacc=''
}
delete(event:any){
  this.ds.deleteacc(event)
  .subscribe((result:any)=>{
    alert(result.message)
    localStorage.removeItem('currentaccountnumber')
    localStorage.removeItem('userName')
    localStorage.removeItem('token')
    this.route.navigateByUrl('')
},(result:any)=>{
  alert(result.error.message)
})
}

}
  // deposit(){
  //   var db = this.ds.database
  //   var acc = this.accno
  //   var psw = this.pswd
  //   var amt = this.amount



  //   if(acc in db){
  //     if(psw == db[acc]["password"]){
  //       db[acc]["Balance"] = Number(db[acc]["Balance"])+Number(amt)
  //       db[acc]['Transaction']={
  //         "Mode":"Online",
  //         "Type":"Deposit",
  //         "Amount":amt
  //       }
  //       console.log("DATABASE:",db)
  //       alert(`Amount ${amt} added successfully,Current account balance is ${db[acc]["Balance"]}`)
  //     }else{
  //       alert("check password")
  //     }
  //   }else{
  //     alert("No such accounts")
  //   }
  // }

//   withdraw(){
//     var db = this.ds.database
//     var acc = this.accnow
//     var psw = this.pswdw
//     var amt = this.amountw

//     if(acc in db){
//       if(psw == db[acc]["password"]){
//         if(Number(amt) < Number(db[acc]["Balance"] )){
//           db[acc]["Balance"] = Number(db[acc]["Balance"])-Number(amt)
//           db[acc]['Transaction']={
//             "Mode":"Online",
//             "Type":"Withdraw",
//             "Amount":amt
//           }
//           console.log("DATABASE:",db)
//           alert(`Amount ${amt} withdrawed successfully,Current account balance is ${db[acc]["Balance"]}`)
//         }else{
//           alert("Insufficient balance")
//         }

//       }else{
//         alert("check password")
//       }
//     }else{
//       alert("No such accounts")
//     }
//   }

// }
