import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any   // to hold the currentAcno

  transaction:any  // to hold the transaction

  constructor(private ds:DataService) {
    this.acno=JSON.parse(localStorage.getItem('currentacno')||'')
   this.ds.gettransaction(this.acno).subscribe((result:any)=>{
    this.transaction=result.message

    },
    (result:any)=>{
      alert(result.error.message)
    })
    // console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
