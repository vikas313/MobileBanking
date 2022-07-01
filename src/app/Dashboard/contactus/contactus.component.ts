import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor(
    private modelctrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}
  onCancel() {
    this.modelctrl.dismiss();
  }
  postUs() {
    this.alertCtrl
      .create({
        message: 'we received your message',
        header: 'Thanks for sharing ',
        buttons: ['okay'],
      })
      .then((alertEl) => {
        alertEl.present();
      });
    this.modelctrl.dismiss();
  }
}
