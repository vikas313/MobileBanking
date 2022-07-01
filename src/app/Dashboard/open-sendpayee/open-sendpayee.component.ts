/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-open-sendpayee',
  templateUrl: './open-sendpayee.component.html',
  styleUrls: ['./open-sendpayee.component.scss'],
})
export class OpenSendpayeeComponent implements OnInit {
  @Input() Payees: string;
  @ViewChild('amount') amount: HTMLInputElement;
  constructor(
    private modalcrtr: ModalController,
    private alertCtrl: AlertController,
    private userData: UserdataService,
    private router: Router
  ) {}

  ngOnInit() {}
  onCancel() {
    this.modalcrtr.dismiss();
  }
  sendSuc() {
    if (this.userData.savingAccount >= +this.amount.value) {
      this.userData.savingAccount -= +this.amount.value;
      this.alertCtrl
        .create({
          message: 'payment successfull',
          header: 'success',
          buttons: ['okay'],
        })
        .then((alertEl) => {
          alertEl.present();
        });
      this.modalcrtr.dismiss();
    } else {
      this.alertCtrl
        .create({
          message: 'Insufficient Funds',
          header: 'Load Funds',
          buttons: ['okay'],
        })
        .then((alertEl) => {
          alertEl.present();
        });
      this.modalcrtr.dismiss();
      this.router.navigateByUrl('wholepage/deposit');
    }
  }
}
