import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{ 

  // deposit properties

  acno=''
  psw=''
  amt=''

  // withdrawproperties

  // acno1=''
  // psw1=''
  // amt1=''
  user= ''

  dateandtime:any





  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 

    this.dateandtime=new Date()

    if(localStorage.getItem('currentuser')){
      this.user=JSON.parse(localStorage.getItem('currentuser') || '')

    }


   
  }

  depositForm=this.fb.group({acno:[''],psw:[''],amt:['']})

  withdrawForm=this.fb.group({acno1:[''],psw1:[''],amt1:['']})

  ngOnInit(): void {
    if(!localStorage.getItem('token')){

      alert('please login first')
      this.router.navigateByUrl('')
  }
}

  deposit(){
    // alert('clicked')
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amt=this.depositForm.value.amt
   this.ds.deposit(acno,psw,amt).subscribe((result:any)=>{
   
    alert(`${amt}is is credited...Available Balance is ${result.message}`)
   },
   result=>{
    alert(result.error.message)
   })
   
  }
  withdraw(){
      // alert('clicked')
      var acno1=this.withdrawForm.value.acno1
      var psw1=this.withdrawForm.value.psw1
      var amt1=this.withdrawForm.value.amt1
     this.ds.withdraw(acno1,psw1,amt1).subscribe((result:any)=>{
      alert(`${amt1} is Debited...Available Balance is ${result.message}`)
     },
     result=>{
      alert(result.error.message)
     })
     
    }
    logout(){
      localStorage.removeItem('currentuser')
      localStorage.removeItem('currentacno')
      localStorage.removeItem('token')
      this.router.navigateByUrl('')
    }

    Deleteconfirm(){
      this.acno=JSON.parse(localStorage.getItem('currentacno') || '')
    }
    oncancel(){
      this.acno=''
    }
    delete(event:any){
      this.ds.deleteacc(event).subscribe((result:any)=>{
        alert(result.message)
        this.logout()
      },
      result=>{
        alert(result.error.message)
      })
      


      // alert(event)
    }

  }


