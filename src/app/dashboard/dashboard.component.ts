import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  //login name display using string interpolation .. binding
  user="";

  //deposit property
  acno="";
  pswd="";
  amount="";

//withdraw property
  acno1="";
  pswd1="";
  amount1="";



  constructor(private ds:DataService) { 
    this.user=this.ds.currentuser;      //login name display
  }

  ngOnInit(): void {
  }

  deposit(){
    //alert('clicked')
    
    var acno = this.acno;   
     var pswd = this.pswd; 
     var amount=this.amount;

     const result=this.ds.deposit(acno,pswd,amount);

     if(result){
      alert(`${amount} is credited...  Balance : ${result}`)
     }
    


  }


  withdraw(){
   // alert('clicked')
   
   var acno = this.acno1;   
   var pswd = this.pswd1; 
   var amount=this.amount1;

   const result=this.ds.withdraw(acno,pswd,amount);

   if(result){
    alert(`${amount} is debited...  Balance : ${result}`)
   }
  
  }
}






