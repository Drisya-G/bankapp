import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname = "";         //properties
  // acno = "";
  // pswd = "";

  aim = 'your perfect Banking partner'

  //register model
  registerForm = this.fb.group({      //  1 group
    //validation for uname ,* means combination
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]], 
    acno:['',[Validators.required, Validators.pattern('[0-9]*')]],              //  2  array
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    // * means regular expression

    //  3  control goes to register.html
  })


  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }             //dependency injection

  ngOnInit(): void {
  }

  register() {
    //alert("Registered");

    // var uname = this.uname;
    // var acno = this.acno;
    // var pswd = this.pswd;

    // console.log(this.registerForm);



    if (this.registerForm.valid) {          //validation  for submit button
      var uname = this.registerForm.value.uname;
      var acno = this.registerForm.value.acno;
      var pswd = this.registerForm.value.pswd;


      const result = this.ds.register(acno, uname, pswd);
      //var userDetails = this.ds.userDetails;
      if (result) {
        alert('successfully registered')
        this.router.navigateByUrl('')
      }
      else {
        alert('something went wrong')
      }

    }
    else {
      alert('input valid data');
      console.log(this.registerForm.get('uname')?.errors); //uname validation

    }

  }
}



