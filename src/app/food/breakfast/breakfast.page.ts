import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {
  //declare breakfast as type string
  Breakfast: string;

  constructor() { }

  ngOnInit() {
  }

  //submit breakfast stirng to console
  submit(){
    console.log('Breakfast: '+ this.Breakfast)
  }

}
