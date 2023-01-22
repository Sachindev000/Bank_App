import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//globel overloading headers
const option={

  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  currentAcno=""
  userDetails:any 



  
  // userDetails:any={
  //   1000:{acno:1000,username:"Amal",password:1000,balance:0,transaction:[]},
  //   1001:{acno:1001,username:"Arju",password:1001,balance:0,transaction:[]},
  //   1002:{acno:1002,username:"David",password:1002,balance:0,transaction:[]}
  // }

  constructor(private http:HttpClient) { 

  }




gettoken(){
 const token=JSON.parse (localStorage.getItem('token') ||'')

 let headers=new HttpHeaders()

 
 if(token){

  option.headers=headers.append('access-token',token)
 }
 return option
}

  register(uname:any,acno:any,psw:any){

    const data={
      acno,uname,psw
    }
    return this.http.post('http://localhost:3000/register',data)
    
  }

  login(acno:any,psw:any){
    
    const data={
      acno,psw
    }
    return this.http.post('http://localhost:3000/login',data)
  }


  deposit(acno:any,psw:any,amt:any){

    const data={
      acno,psw,amt
    }
    return this.http.post('http://localhost:3000/deposit',data,this.gettoken())
    
  }



  withdraw(acno:any,psw:any,amt:any){
    const data={
      acno,psw,amt
    }


    return this.http.post('http://localhost:3000/withdraw',data,this.gettoken())
    
   
}

gettransaction(acno:any){
  const data={
    acno
  }


  return this.http.post('http://localhost:3000/transaction',data,this.gettoken())
}
deleteacc(acno:any){
  return this.http.delete('http://localhost:3000/deleteacc/'+acno,this.gettoken())


}

}


