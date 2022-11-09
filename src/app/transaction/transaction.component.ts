import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  acno:any; //to hold acno

  transaction:any; // to hold transaction details

  constructor(private ds:DataService) { 
    //to get the value of current acno from dataservice
    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.getTransaction(this.acno);
    console.log(this.transaction);
    
  }

  ngOnInit(): void {
  }

}


