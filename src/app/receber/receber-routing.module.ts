import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceberPage } from './receber.page';

const routes: Routes = [
  {
    path: '',
    component: ReceberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceberPageRoutingModule {}
