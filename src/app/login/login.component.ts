import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {     //3rd execution

  //variable creation :
  aim = 'your perfect Banking partner'        //string interpolation
  account = "Enter your acno here";           //property binding




  acno = '';    // these 2 are declared as empty string to do validation in login() function
  pswd = '';


 loginForm = this.fb.group({
   acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })


  constructor(private fb:FormBuilder, private router: Router, private ds: DataService) { }   //1st execution
  //dependency injection


  ngOnInit(): void {      //life cycle hooks - initial process //2nd execution
  }

  //database create :

  // userDetails: any ={       //object of objects
  //   1000: { acno: 1000, username: 'Drisya', password: 1000, balance: 17000 },
  //   1001: { acno: 1001, username: 'Nandini', password: 1001, balance: 15000 },
  //   1002: { acno: 1002, username: 'Athira', password: 1002, balance: 12000 },


  // }

  //userdefined function()   //4th execution



  //  ....... Event binding  using  $(event)..........

  acnoChange(event: any) {
    //console.log(event);               in console ..there shown in target
    console.log(event.target.value);          //acno will print in console
    this.acno = event.target.value;
  }

  pswdChange(event: any) {
    //console.log(event);
    console.log(event.target.value);
    this.pswd = event.target.value;         //for validation

  }



  // login(){
  //   // alert('login clicked')        //event binding
  // }



  // login() {

  //   //...validation......

  //   var acno = this.acno;   
  //    var pswd = this.pswd;   

  // var userDetails = this.userDetails;

  //    if (acno in userDetails) {
  //      if (pswd == userDetails[acno]['password']) {
  //        alert("login successfull")
  //       this.router.navigateByUrl('dashboard');
  //       //after login it goes to dashboard

  //     }
  //      else {
  //       alert("incorrect password")
  //     }
  //    }
  //    else {
  //      alert("user doesn't exist")
  //    }

  //  }





  // login(a: any, p: any) {
  //   //..... EVent handling using template referencing variable.....

  //   var acno = a.value;
  //   var pswd = p.value;


  //   var userDetails = this.userDetails;

  //   if (acno in userDetails) {
  //     if (pswd == userDetails[acno]['password']) {
  //       alert("login successfull")
  //     }
  //     else {
  //       alert("incorrect password")
  //     }
  //   }
  //   else {
  //     alert("user doesn't exist")
  //   }

  // }





  login() {


    // var acno = this.acno;
    // var pswd = this.pswd;



    if (this.loginForm.valid) {          //validation  for submit button
      var acno = this.loginForm.value.acno;
      var pswd = this.loginForm.value.pswd;

      const result = this.ds.login(acno, pswd);
      if (result) {
        alert('login successfull');
        this.router.navigateByUrl('dashboard');
      }
    }
    else {
      alert('input valid data')
      console.log(this.loginForm.get('acno')?.errors);

    }
  }
}
