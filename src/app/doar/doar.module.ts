import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoarPageRoutingModule } from './doar-routing.module';

import { DoarPage } from './doar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoarPageRoutingModule
  ],
  declarations: [DoarPage]
})
export class DoarPageModule {}
