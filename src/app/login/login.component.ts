import { Component, OnInit } from '@angular/core';

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


  constructor() { }   //1st execution

  ngOnInit(): void {      //life cycle hooks - initial process //2nd execution
  }

  //database create :
  userDetails:any = {       //object of objects
    1000: { acno: 1000, username: 'Drisya', password: 1000, balance: 17000 },
    1001: { acno: 1001, username: 'Nandini', password: 1001, balance: 15000 },
    1002: { acno: 1002, username: 'Athira', password: 1002, balance: 12000 },


  }

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



  login() {

    //validation
    var acno = this.acno;   
    var pswd = this.pswd;   

    var userDetails = this.userDetails;

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        alert("login successfull")
      }
      else {
        alert("incorrect password")
      }
    }
    else{
      alert("user doesn't exist")
  }
    
}

}










