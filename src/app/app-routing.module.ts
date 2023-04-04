import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bardecoder',
    pathMatch: 'full'
  },
  {
    path: 'bardecoder',
    loadChildren: () => import('./bardecoder/bardecoder.module').then( m => m.BardecoderPageModule)
  },
  {
    path: 'barcode-settings',
    loadChildren: () => import('./barcode-settings/barcode-settings.module').then( m => m.BarcodeSettingsPageModule)
  },
  {
    path: 'symbologies-test',
    loadChildren: () => import('./symbologies-test/symbologies-test.module').then( m => m.SymbologiesTestPageModule)
  },
  {
    path: 'data-print-test',
    loadChildren: () => import('./data-print-test/data-print-test.module').then( m => m.DataPrintTestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
