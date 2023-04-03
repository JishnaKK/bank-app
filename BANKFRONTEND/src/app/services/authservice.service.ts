import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  database:any = {
    1000:{acno:1000,uname:"JISH",password:1000,Balance:10000}
  }
  username:any
  constructor(private http:HttpClient) { }

  // register(acno:any,pswd:any,uname:any){
  //   var database:any = this.database
  //   if(acno in database){
  //     return false
  //   }else{
  //     database[acno]={
  //       acno,
  //       'password':pswd,
  //       uname,
  //       Balance:0
  //     }


  //     //car['value']=90
  //     console.log("database",this.database)
  //     return true
  //   }
  // }

  register(acno:any,pswd:any,name:any){
  const data ={
    acno,
    name,
    pswd
  }

  console.log("data in auth:",data)
return this.http.post('http://localhost:3000/register',data)
  }


  login(acno:any,pswd:any){
const data={
  acno,
  pswd
}
return this.http.post('http://localhost:3000/login',data)
  }

  deleteacc(acno:any){
  return this.http.delete(`http://localhost:3000/deleteacc/${acno}`)
}
//     let db = this.database
//     if(acno in db){
//       if(password == db[acno]['password']){
//         this.username = db[acno]['uname']
//         localStorage.setItem('name',JSON.stringify(this.username))
//         return true
//       }else{
//         alert('Incorrect password')
//         return false
//       }
//     }else{
//       alert("User does not exists")
//       return false
//     }
//   }
}
