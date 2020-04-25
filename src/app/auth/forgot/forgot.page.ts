import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  //declare user as string
  user:string;

  constructor() { }

  ngOnInit() {
  }

  //submit username to console
  submit(){
    console.log('forgot password' + this.user)
  }

}
