import { Component, OnInit } from '@angular/core';

declare let scannerProperties : any;

@Component({
  selector: 'app-symbologies-test',
  templateUrl: './symbologies-test.page.html',
  styleUrls: ['./symbologies-test.page.scss'],
})
export class SymbologiesTestPage implements OnInit {
  symbologies: any = {};
  aztec : any = {};
  codabar : any = {};
  code128 : any = {};
  constructor() { 



    scannerProperties.edit(
  		(data :string) => {
			this.symbologies =  JSON.parse(data);
			this.aztec = this.symbologies.aztec;
			this.codabar = this.symbologies.codabar;
			this.code128 = this.symbologies.code128;
  		},
  		(err:any) => {
  			alert(err);
  		});
  }

  ngOnInit() {

    this.symbologies.aztec = this.aztec;
	this.symbologies.codabar = this.codabar;
	this.symbologies.code128 = this.code128;

	scannerProperties.store(
  		this.symbologies,
  		(data:string) => {
  			alert(data);
  		},
  		(err:any) => {
  			alert(err);
		}
	);

  }

}
