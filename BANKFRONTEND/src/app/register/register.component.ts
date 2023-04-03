import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // accno:any
  // name:any
  // pswd:any
  registerform = this.fb.group({
    accno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    name: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
    
    
  })
  constructor(private ds: AuthserviceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registerfun() {
    var acno = this.registerform.value.accno
    var uname = this.registerform.value.name
    var password = this.registerform.value.pswd

    if (this.registerform.valid) {
      this.ds.register(acno, password, uname)
.subscribe((result)=>{
  console.log("result:",result);
  if(result){
    alert("registerd successfully")
    this.router.navigateByUrl('')
  }else{
    alert("invalid form")
  }
},(result)=>{
  console.log("test",result.error.message);
  alert(result.error.message)
})
    }
  }
}

//       if (result) {
//         alert("Register successfull")
//         this.router.navigateByUrl('')
//       } else {
//         alert("Register failed")
//       }
//     } else {
//       alert("not a valid form")
//     }
//   }
//  }
