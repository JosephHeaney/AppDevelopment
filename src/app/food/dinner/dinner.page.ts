import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.page.html',
  styleUrls: ['./dinner.page.scss'],
})
export class DinnerPage implements OnInit {
  //declare dinner as type string
  dinner: string;

  constructor() { }

  ngOnInit() {
  }

  //submit Dinner stirng to console
  submit(){
    console.log('Dinner: '+ this.dinner)
  }

}
