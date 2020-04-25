import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //declaring user and password as a string
  user:string;
  pass:string;
  
  constructor() { }

  ngOnInit() {
  }

  //log to console username and password
  signIn(){
    console.log('Username: '+ this.user + 'Password: ' +this.pass)
  }

}
