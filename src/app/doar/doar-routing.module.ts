import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoarPage } from './doar.page';

const routes: Routes = [
  {
    path: '',
    component: DoarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoarPageRoutingModule {}
