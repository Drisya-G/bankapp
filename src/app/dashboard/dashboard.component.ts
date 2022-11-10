import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //login name display using string interpolation .. binding
  user = "";

  //deposit property
  // acno = "";
  // pswd = "";
  // amount = "";


  //withdraw property
  // acno1 = "";
  // pswd1 = "";
  // amount1 = "";


  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],


  })


  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],


  })


  constructor(private fb: FormBuilder, private ds: DataService) {
    this.user = this.ds.currentuser;      //login name display
  }

  ngOnInit(): void {
  }

  deposit() {
    //alert('clicked')

    // var acno = this.acno;   
    //  var pswd = this.pswd; 
    //  var amount=this.amount;


    if (this.depositForm.valid) {          //validation  for submit button
      var acno = this.depositForm.value.acno;
      var pswd = this.depositForm.value.pswd;
      var amount = this.depositForm.value.amount;


      const result = this.ds.deposit(acno, pswd, amount);

      if (result) {
        alert(`${amount} is credited...  Balance : ${result}`)
      }
    }
    else {
      alert('input valid data');
      console.log(this.depositForm.get('acno')?.errors);

    }


  }


  withdraw() {
    // alert('clicked')

    // var acno = this.acno1;
    // var pswd = this.pswd1;
    // var amount = this.amount1;

    if (this.withdrawForm.valid) {          //validation  for submit button
      var acno = this.withdrawForm.value.acno1;
      var pswd = this.withdrawForm.value.pswd1;
      var amount = this.withdrawForm.value.amount1;

    const result = this.ds.withdraw(acno, pswd, amount);

    if (result) {
      alert(`${amount} is debited...  Balance : ${result}`)
    }

  }
  else {
    alert('input valid data');
    console.log(this.depositForm.get('acno')?.errors);

  }
}
}






