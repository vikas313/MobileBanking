import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { OpenSendmoneyComponent } from '../open-sendmoney/open-sendmoney.component';
import { OpenSendpayeeComponent } from '../open-sendpayee/open-sendpayee.component';
import { AddingpayeeComponent } from '../addingpayee/addingpayee.component';
import { ContactusComponent } from '../contactus/contactus.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  declarations: [
    DashboardPage,
    OpenSendmoneyComponent,
    OpenSendpayeeComponent,
    AddingpayeeComponent,
    ContactusComponent
  ],
})
export class DashboardPageModule {}
