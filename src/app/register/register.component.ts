import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname:any
  acno:any
  pswd:any

  constructor(private router:Router , private ds:DataService) { }

  ngOnInit(): void {
  }

  register(){

    var username=this.uname
    var accno=this.acno
    var password=this.pswd

    const result=this.ds.register(username,accno,password)
    if(result){
      alert('Register Succesful')
      this.router.navigateByUrl('')
    }
    else{
      alert('Register failed')   
      this.router.navigateByUrl('register')
    }

  }

}