import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser: any;    //login name display
  currentAcno:any;  //login acno display

  userDetails: any = {       //object of objects
    1000: { acno: 1000, username: 'Drisya', password: 1000, balance: 17000, transaction: [] },
    1001: { acno: 1001, username: 'Nandini', password: 1001, balance: 15000, transaction: [] },
    1002: { acno: 1002, username: 'Athira', password: 1002, balance: 12000, transaction: [] },


  }



  constructor() { 
    this.getDetails();
  }



  //saveDetails() = to store data  in the local storage

  saveDetails(){
    if(this.userDetails){
      localStorage.setItem('dataBase',JSON.stringify(this.userDetails));
    }
    if(this.currentAcno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno));
    }
    
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.currentuser));
    }
  }



  //getDetails() = to get data from local storage

  getDetails(){
    if(localStorage.getItem('dataBase')){
      this.userDetails=JSON.parse(localStorage.getItem('dataBase' )|| '');
    }

  }

  getcurrentUser(){
    if(localStorage.getItem('currentuser')){
      this.userDetails=JSON.parse(localStorage.getItem('currentuser') || '');
    }

  }

  getcurrentAcno(){
    if(localStorage.getItem('currentAcno')){
      this.userDetails=JSON.parse(localStorage.getItem('currentAcno') || '');
    }

  }
 

  //function to register an user
  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      return false;
    }
    else {
      userDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction: []

      }
      console.log(userDetails);
        
      this.saveDetails();   //function call

      return true; // then actual code will give to register function
    }
  }



  login(acno: any, password: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        this.currentuser = this.userDetails[acno]['username']; //login name display
        this.currentAcno=acno;
      this.saveDetails();

        return true;
      }
      else {
        alert('Incorrect password');
        return false;
      }
    }
    else {
      alert('Invalid user');
      return false;         // balance in login.ts
    }
  }




  deposit(acno: any, pswd: any, amt: any) {

    var userDetails = this.userDetails;
    var amount = parseInt(amt);
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amount;
        userDetails[acno]['transaction'].push({
          type: 'Credit',
          amount
        })
        console.log(userDetails);
      this.saveDetails();


        return userDetails[acno]['balance'];

      }
      else {
        alert('incorrect password')
        return false;
      }
    }

    else {
      alert('invalid user');
      return false;
    }

  }







  withdraw(acno: any, pswd: any, amt: any) {

    var userDetails = this.userDetails;
    var amount = parseInt(amt);
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        if (userDetails[acno]['balance'] > amount) {
          userDetails[acno]['balance'] -= amount;

          userDetails[acno]['transaction'].push({
            type: 'Debit',
            amount
          })
          console.log(userDetails);
        this.saveDetails();


          return userDetails[acno]['balance'];

        }
        else {
          alert('incorrect password')
          return false;
        }
      }
    }
    else {
      alert('invalid user');
      return false;
    }

  }


  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
    
  }

  

}




