import { Component, OnInit } from '@angular/core';
declare let scannerProperties : any;

class barcodeStandard{
  enable:boolean = false;
  supported:boolean = true;
}

@Component({
  selector: 'app-barcode-settings',
  templateUrl: './barcode-settings.page.html',
  styleUrls: ['./barcode-settings.page.scss'],
})
export class BarcodeSettingsPage implements OnInit {
  public message:string = 'start message testing';
  public message2:string = 'start message testing';
  public message3:string = 'start message testing';

  properties : any = {};
  keyboardWedge : barcodeStandard = {"enable":false,"supported":true};
  aztec : barcodeStandard = {"enable":false,"supported":true};
  codabar : barcodeStandard = {"enable":false,"supported":true};
  code128 : barcodeStandard = {"enable":false,"supported":true};
  code39 : barcodeStandard = {"enable":false,"supported":true};
  code93 : barcodeStandard = {"enable":false,"supported":true};
  composite : barcodeStandard = {"enable":false,"supported":true};
  datamatrix : barcodeStandard = {"enable":false,"supported":true};
  digimarc : barcodeStandard = {"enable":false,"supported":true};
  discrete25 : barcodeStandard = {"enable":false,"supported":true};
  ean13 : barcodeStandard = {"enable":false,"supported":true};
  ean8 : barcodeStandard = {"enable":false,"supported":true};
  gs1DataBar_14 : barcodeStandard = {"enable":false,"supported":true};
  gs1DataBar_Expanded : barcodeStandard = {"enable":false,"supported":true};
  gs1DataBar_Limited : barcodeStandard = {"enable":false,"supported":true};
  interleaved25 : barcodeStandard = {"enable":false,"supported":true};
  matrix25 : barcodeStandard = {"enable":false,"supported":true};
  maxicode : barcodeStandard = {"enable":false,"supported":true};
  microQr : barcodeStandard = {"enable":false,"supported":true};
  micropdf417 : barcodeStandard = {"enable":false,"supported":true};
  msi : barcodeStandard = {"enable":false,"supported":true};
  p4State : barcodeStandard = {"enable":false,"supported":true};
  pAus : barcodeStandard = {"enable":false,"supported":true};
  pJap : barcodeStandard = {"enable":false,"supported":true};
  pKix : barcodeStandard = {"enable":false,"supported":true};
  pPlanet : barcodeStandard = {"enable":false,"supported":true};
  pPostnet : barcodeStandard = {"enable":false,"supported":true};
  pRM : barcodeStandard = {"enable":false,"supported":true};
  pdf417 : barcodeStandard = {"enable":false,"supported":true};
  qrCode : barcodeStandard = {"enable":false,"supported":true};
  upcA : barcodeStandard = {"enable":false,"supported":true};
  upcE : barcodeStandard = {"enable":false,"supported":true};
  constructor() { 
      console.log('Constructing');
      this.message = 'Data Not Found';
      this.message2 = 'scannerProperties not Defined';
      this.message3 = 'New setting not saved';
    //this.keyboardWedge.enable = true;
    //this.codabar.enable = false;
    if(typeof scannerProperties !== 'undefined'){
      this.message2 = 'scannerProperties Defined';
      scannerProperties.edit(
        (data: any) => {
          this.message = 'Data Found';
          this.properties =  JSON.parse(data);
          this.message = 'Data Parsed';
          this.keyboardWedge = this.properties.keyboardWedge;
          this.aztec = this.properties.aztec;
          this.codabar = this.properties.codabar;
          this.code128 = this.properties.code128;
          this.code39 = this.properties.code39;
          this.code93 = this.properties.code93;
          this.composite = this.properties.composite;
          this.datamatrix = this.properties.datamatrix;
          this.digimarc = this.properties.digimarc;
          this.discrete25 = this.properties.discrete25;
          this.ean13 = this.properties.ean13;
          this.ean8 = this.properties.ean8;
          this.gs1DataBar_14 = this.properties.gs1DataBar_14;
          this.gs1DataBar_Expanded = this.properties.gs1DataBar_Expanded;
          this.gs1DataBar_Limited = this.properties.gs1DataBar_Limited;
          this.interleaved25 = this.properties.interleaved25;
          this.matrix25 = this.properties.matrix25;
          this.maxicode = this.properties.maxicode;
          this.microQr = this.properties.microQr;
          this.micropdf417 = this.properties.micropdf417;
          this.msi = this.properties.msi;
          this.p4State = this.properties.p4State;
          this.pAus = this.properties.pAus;
          this.pJap = this.properties.pJap;
          this.pKix = this.properties.pKix;
          this.pPlanet = this.properties.pPlanet;
          this.pPostnet = this.properties.pPostnet;
          this.pRM = this.properties.pRM;
          this.pdf417 = this.properties.pdf417;
          this.qrCode = this.properties.qrCode;
          this.upcA = this.properties.upcA;
          this.upcE = this.properties.upcE;
          this.message = 'Settings Loaded';
        },
        (err:any) => { alert(err + " \nFailed to load current settings"); }
      );
    }
  }
  ngOnInit() {
  }

  saveSetting(){
    console.log('Saved');
    this.properties.keyboardWedge = this.keyboardWedge;
    this.properties.aztec = this.aztec;
    this.properties.codabar = this.codabar;
    this.properties.code128 = this.code128;
    this.properties.code39 = this.code39;
    this.properties.code93 = this.code93;
    this.properties.composite = this.composite;
    this.properties.datamatrix = this.datamatrix;
    this.properties.digimarc = this.digimarc;
    this.properties.discrete25 = this.discrete25;
    this.properties.ean13 = this.ean13;
    this.properties.ean8 = this.ean8;
    this.properties.gs1DataBar_14 = this.gs1DataBar_14;
    this.properties.gs1DataBar_Expanded = this.gs1DataBar_Expanded;
    this.properties.gs1DataBar_Limited = this.gs1DataBar_Limited;
    this.properties.interleaved25 = this.interleaved25;
    this.properties.matrix25 = this.matrix25;
    this.properties.maxicode = this.maxicode;
    this.properties.microQr = this.microQr;
    this.properties.micropdf417 = this.micropdf417;
    this.properties.msi = this.msi;
    this.properties.p4State = this.p4State;
    this.properties.pAus = this.pAus;
    this.properties.pJap = this.pJap;
    this.properties.pKix = this.pKix;
    this.properties.pPlanet = this.pPlanet;
    this.properties.pPostnet = this.pPostnet;
    this.properties.pRM = this.pRM;
    this.properties.pdf417 = this.pdf417;
    this.properties.qrCode = this.qrCode;
    this.properties.upcA = this.upcA;
    this.properties.upcE = this.upcE;
    
    if(typeof scannerProperties !== 'undefined'){
      this.message2 = 'scannerProperties Defined';
      scannerProperties.store(
        this.properties,
        (data :string) => {
          this.message3 = 'New Settings saved';
          alert(data);
        },
        (err:any) => {
          alert(err + " \nFailed to save settings");
        }
      );
    } else{
      this.message2 = 'scannerProperties Not Defined';
      alert("ScannerProperties not Defined");
    }

  }

}
