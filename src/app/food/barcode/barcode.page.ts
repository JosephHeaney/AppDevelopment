import { Component, OnInit } from '@angular/core';

//import for barcode scanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  constructor(private barcode: BarcodeScanner) { }

ngOnInit(){
  
}
//scan barcode and read data
Scan(){
  this.barcode.scan().then((barcodeData)=>{
    alert(barcodeData.text);
  }, (err)=>{
    alert(JSON.stringify(err));
  } )
}

}
