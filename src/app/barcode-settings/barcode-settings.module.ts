import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeSettingsPageRoutingModule } from './barcode-settings-routing.module';

import { BarcodeSettingsPage } from './barcode-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeSettingsPageRoutingModule
  ],
  declarations: [BarcodeSettingsPage]
})
export class BarcodeSettingsPageModule {}
