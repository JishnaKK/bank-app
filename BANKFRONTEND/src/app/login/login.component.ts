import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

abc:any = "Welcome to bank"
accno:any = "Enter your account number"
pswd:any="Enter your password"
pswd1:any = ""
accountnumber:any
  constructor(private router:Router,private ds:AuthserviceService) {

   }

  ngOnInit(): void {
  }

login(){
 var acno:any = this.accountnumber
 var pswd:any = this.pswd1


 this.ds.login(acno,pswd)
.subscribe((result:any)=>{
  alert(result.message)
  localStorage.setItem("currentaccountnumber",JSON.stringify(result.accountnumber))
  localStorage.setItem("userName",JSON.stringify(result.currentName))
localStorage.setItem("token",JSON.stringify(result.token))
this.router.navigateByUrl('dashboard')
},(result:any)=>{
  alert(result.error.message)
  })
}


//  var result:any = this.ds.login(acno,pswd)

//  if(result){
//   alert("login Successfull")
//   this.router.navigateByUrl('dashboard')
//  }else{
//   alert("Login failed")
//  }

// }

// acnochange(event:any){
//   console.log(event)

//   this.accountnumber = event.target.value
//   console.log("INPUT:",this.accountnumber)


// }

// passwordchange(event:any){
//   this.pswd1 = event.target.value
// }

}
