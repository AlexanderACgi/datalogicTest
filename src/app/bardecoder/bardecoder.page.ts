import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare let barcodeManager : any;
class Barcode{
  barcodeData:string = '';
  barcodeType:string = '';
};

@Component({
  selector: 'app-bardecoder',
  templateUrl: './bardecoder.page.html',
  styleUrls: ['./bardecoder.page.scss']
})

export class BardecoderPage implements OnInit {
  public message:string = 'start message testing';
  public message2:string = 'start message testing';
  public message3:string = 'BarcodeManager is not defined';
  public message4:string = 'Data not received';
  testprint:string = ''
  public barcode:Barcode = {
    barcodeData : '',
    barcodeType : '',
  };
  public testBarcode:Barcode = {
    barcodeData : 'asdf',
    barcodeType : 'asdf2',
  };
  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.testprint = JSON.stringify(this.testBarcode);
      this.message2 = 'Page Loading';
     //this.message2 = this.testprint;
      this.message = 'Data received: * \nwith type: *';
     if(typeof barcodeManager !== 'undefined'){
      this.message3 = 'BarcodeManager is defined';
      barcodeManager.addReadListner(
        (data:any) => {
          //this.message = 'data:received ' + JSON.parse(data);
          this.message4 = 'Data Received';
        this.barcode = JSON.parse(data);
        this.message = 'data received: ' + this.barcode.barcodeData + '\nwith type: ' + this.barcode.barcodeType;
    },
          (err: any)=>{
            alert(err);
          });
      }
      this.message2 = 'Page Loaded';
    });
  }
  async shareTest(){
    this.message = 'data:test ';
  }
 
  ngOnInit() {
  }

}
