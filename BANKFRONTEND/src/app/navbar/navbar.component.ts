import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  route: any;
name:any

  constructor(private router:Router) {
    // this.name=JSON.parse( localStorage.getItem('name')||'')
    this.name=JSON.parse(localStorage.getItem('userName')||'')
   }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigateByUrl('')


  }

}
