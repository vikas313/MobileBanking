/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UserdataService } from 'src/app/userdata.service';
import { OpenSendpayeeComponent } from '../open-sendpayee/open-sendpayee.component';

@Component({
  selector: 'app-open-sendmoney',
  templateUrl: './open-sendmoney.component.html',
  styleUrls: ['./open-sendmoney.component.scss'],
})
export class OpenSendmoneyComponent implements OnInit {
  @Input() payees: string[];

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private userData: UserdataService
  ) {}

  ngOnInit() {}
  onCancel() {
    this.modalCtrl.dismiss();
  }
  SendToPayee(payee: string) {

    this.modalCtrl
      .create({
        component: OpenSendpayeeComponent,
        componentProps: { Payees: payee },
      })
      .then((modelEl) => {
        modelEl.present();
      });
  }
}
