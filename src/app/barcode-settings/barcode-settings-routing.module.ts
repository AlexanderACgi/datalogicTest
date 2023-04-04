import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeSettingsPage } from './barcode-settings.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodeSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodeSettingsPageRoutingModule {}
