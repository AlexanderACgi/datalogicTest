import { Component, OnInit } from '@angular/core';

declare let scannerProperties : any;

@Component({
  selector: 'app-data-print-test',
  templateUrl: './data-print-test.page.html',
  styleUrls: ['./data-print-test.page.scss'],
})
export class DataPrintTestPage implements OnInit {
  alldata:string = '';

  constructor() {
    scannerProperties.edit(
  		(data :string) =>{
        this.alldata = data;
    },
    (err:any) => {
      alert(err);
    });
   }

  ngOnInit() {
  }

}
