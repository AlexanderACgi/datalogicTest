import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BardecoderPage } from './bardecoder.page';

const routes: Routes = [
  {
    path: '',
    component: BardecoderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BardecoderPageRoutingModule {}
