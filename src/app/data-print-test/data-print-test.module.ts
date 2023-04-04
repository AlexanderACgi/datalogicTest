import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPrintTestPageRoutingModule } from './data-print-test-routing.module';

import { DataPrintTestPage } from './data-print-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPrintTestPageRoutingModule
  ],
  declarations: [DataPrintTestPage]
})
export class DataPrintTestPageModule {}
