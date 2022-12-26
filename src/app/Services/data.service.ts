import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  currentAcno=""



  
  userDetails:any={
    1000:{acno:1000,username:"Amal",password:1000,balance:0,transaction:[]},
    1001:{acno:1001,username:"Arju",password:1001,balance:0,transaction:[]},
    1002:{acno:1002,username:"David",password:1002,balance:0,transaction:[]}
  }

  constructor() { }

  register(username:any,accno:any,password:any){
    let userDetails = this.userDetails
    if(accno in userDetails){
      return false
    }
    else{
      userDetails[accno]={
        accno:accno,
        username:username,
        password:password,
        balance:0,
        transaction:[]
      }
      console.log(userDetails);
      return true
      
    }
  }

  login(acno:any,pswd:any){
    let userDetails=this.userDetails
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        this.currentUser=userDetails[acno]['username']
        this.currentAcno=acno
        return true;
      }
      else{
        return false
      }
    }
    else{
      return false;
    }
  }


  deposit(acno:any,pswd:any,amt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amt)
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amount
        userDetails[acno]['transaction'].push({
          type:'CREDIT',
          amount:amt
        })
        console.log(userDetails);
        
        return userDetails[acno]['balance']
      }
      else{
        alert('Password Incorrect')
        return false
      }
    }
    else{
      alert('Invalid userDetails')
      return false
    }
  }
  withdraw(acno:any,pswd:any,amt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amt)
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        if(userDetails[acno]['balance']>amount){
        userDetails[acno]['balance']-=amount
        userDetails[acno]['transaction'].push({
          type:'DEBIT',
          amount:amt
        })
        return userDetails[acno]['balance']
      }
      else{
        alert('Password Incorrect')
        return false
      }
    }
    else{
      alert('Invalid userDetails')
      return false
    }
  }
}

gettransaction(acno:any){
  return this.userDetails[acno]["transaction"]
}

}


