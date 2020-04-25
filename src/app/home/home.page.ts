import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;

  constructor( public http : HttpClient ) { 
    this.getData();
  }

  ngOnInit() {
  }

  getData(){//espn api url
    let url = 'http://api.espn.com/v1/sports/news/headlines/top';
    this.http.get(url).subscribe(data =>{
      this.data = data;
    });
  }
}
