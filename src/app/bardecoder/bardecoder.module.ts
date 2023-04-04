import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BardecoderPageRoutingModule } from './bardecoder-routing.module';

import { BardecoderPage } from './bardecoder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BardecoderPageRoutingModule
  ],
  declarations: [BardecoderPage]
})
export class BardecoderPageModule {}
