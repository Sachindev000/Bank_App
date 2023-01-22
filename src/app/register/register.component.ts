import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname:any
  // acno:any
  // pswd:any

  constructor(private router:Router , private ds:DataService,private fb:FormBuilder) { }

  registerForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[a-z A-Z]+')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  ngOnInit(): void {
  }

  register(){

    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw

    if(this.registerForm.valid){
      
   this.ds.register(uname,acno,psw).subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl('')
   },
   result=>{
    alert(result.error.message)
    this.router.navigateByUrl('')
   }
   
   
   )
  }
  else{
    alert('invalid form')
  }
}

}