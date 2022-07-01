import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WholepagePageRoutingModule } from './wholepage-routing.module';

import { WholepagePage } from './wholepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WholepagePageRoutingModule
  ],
  declarations: [WholepagePage]
})
export class WholepagePageModule {}
