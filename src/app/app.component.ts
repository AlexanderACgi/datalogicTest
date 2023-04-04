import { Component, OnInit } from '@angular/core';
import { BardecoderPage } from './bardecoder/bardecoder.page';
//declare let barcodeManager : any;

@Component({  selector: 'app-root', 
 templateUrl: 'app.component.html', 
  styleUrls: ['app.component.scss'],})

export class AppComponent implements OnInit{
    public appPages = [
      /*{ title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
      { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
      { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
      { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
      { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
      { title: 'Spam', url: '/folder/Spam', icon: 'warning' },*/
      { title: 'bardecoder', url: '/bardecoder', icon: 'warning' },
      { title: 'barcode-settings', url: '/barcode-settings', icon: 'archive' },
     // { title: 'symbologies-test', url: '/symbologies-test', icon: 'paper-plane' },
     // { title: 'dataprint-test', url: '/data-print-test', icon: 'mail' },
    ];
   constructor( ) 
     {
     /* barcodeManager.addReadListner(
        (data: any) => {
          BardecoderPage.updateBarcode(JSON.parse(data));
          //classTest:barcode;
         //this.message = 'data:received ' + JSON.parse(data);
     });*/
     } 
      ngOnInit() { 

      }
    }


/*import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { StatusBar } from '@ionic/native/status-bar';
//import { SplashScreen } from '@ionic/native/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
declare let barcodeManager : any;
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
   // { title: 'bardecoder', url: '/bardecoder', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  message:string = "";
  constructor(platform: Platform, /*statusBar: StatusBar, splashScreen: SplashScreen, public events: Event) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      barcodeManager.addReadListner(
        (data: any) => {
          this.message = 'data:received ' + JSON.parse(data);
          //this.events.publish('data:received', JSON.parse(data));
          //alert(data);
        },
        (err: any)=>{
          alert(err);
        }
      );

    });
  }
}
*/


