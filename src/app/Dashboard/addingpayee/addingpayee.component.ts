import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-addingpayee',
  templateUrl: './addingpayee.component.html',
  styleUrls: ['./addingpayee.component.scss'],
})
export class AddingpayeeComponent implements OnInit {
  @ViewChild('name') payeeName: HTMLInputElement;
  @ViewChild('number') payeeNumber: HTMLInputElement;
  mypayees: string[];
  constructor(
    private modelctrl: ModalController,
    private userData: UserdataService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.mypayees = this.userData.myPayees;
  }
  onCancel() {
    this.modelctrl.dismiss();
  }
  onAddPayee() {
    this.userData.myPayees.push(this.payeeName.value);

    this.alertCtrl
      .create({
        message: 'Payee Added Successfully!',
        header: 'success',
        buttons: ['okay'],
      })
      .then((alertEl) => {
        alertEl.present();
      });
    this.modelctrl.dismiss();
  }
}
