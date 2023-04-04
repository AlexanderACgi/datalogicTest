import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPrintTestPage } from './data-print-test.page';

const routes: Routes = [
  {
    path: '',
    component: DataPrintTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPrintTestPageRoutingModule {}
