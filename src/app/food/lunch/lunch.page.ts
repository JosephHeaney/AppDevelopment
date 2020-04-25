import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.page.html',
  styleUrls: ['./lunch.page.scss'],
})
export class LunchPage implements OnInit {
  //declare lunch as type string
  lunch: string;

  constructor() { }

  ngOnInit() {
  }

  //submit Lunch stirng to console
  submit(){
    console.log('Lunch: '+ this.lunch)
  }

}
