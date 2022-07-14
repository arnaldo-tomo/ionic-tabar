import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceberPageRoutingModule } from './receber-routing.module';

import { ReceberPage } from './receber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceberPageRoutingModule
  ],
  declarations: [ReceberPage]
})
export class ReceberPageModule {}
