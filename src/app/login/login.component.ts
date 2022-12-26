import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    demo="Perfect Banking partner"
    aim="Account Number"

    acno:any
    pswd:any
    
  constructor(private router:Router , private ds:DataService) { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }

  // login(){
  //   var acno=this.acno
  //   var pswd=this.pswd
  //   var userDetails=this.userDetails

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('Login Successful')
  //     }
  //     else{
  //       alert('Incorrect password')
  //     }
  //   }
  //   else{
  //     alert('Invalid account number')
  //   }
  // }
  
  login(){
    var acno=this.acno
    var pswd=this.pswd
    var userDetails=this.ds.userDetails

    const result=this.ds.login(acno,pswd)


    if(result){
      alert('Login successful');
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('Login failed')
    }
  }
}
