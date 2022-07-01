import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransfersPageRoutingModule } from './transfers-routing.module';

import { TransfersPage } from './transfers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransfersPageRoutingModule
  ],
  declarations: [TransfersPage]
})
export class TransfersPageModule {}
