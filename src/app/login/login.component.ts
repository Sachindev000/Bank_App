import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    psw:any
    
  constructor(private router:Router , private ds:DataService,private fb:FormBuilder) { }

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  }
  pswdChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
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
    var acno=this.loginForm.value.acno
    var psw=this.loginForm.value.psw
    // var userDetails=this.ds.userDetails
    if(this.loginForm.valid){
      this.ds.login(acno,psw).subscribe((result:any)=>{

        localStorage.setItem('currentacno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentuser',JSON.stringify(result.currentUser))
        localStorage.setItem('token',JSON.stringify(result.token))

        alert(result.message)

        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      }
      
      )
    
  }
  else{
    alert('invalid form')
  }
}
}
