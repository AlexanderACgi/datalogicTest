import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymbologiesTestPageRoutingModule } from './symbologies-test-routing.module';

import { SymbologiesTestPage } from './symbologies-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymbologiesTestPageRoutingModule
  ],
  declarations: [SymbologiesTestPage]
})
export class SymbologiesTestPageModule {}
