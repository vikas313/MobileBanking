/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserdataService } from 'src/app/userdata.service';
import { AddingpayeeComponent } from '../addingpayee/addingpayee.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { OpenSendmoneyComponent } from '../open-sendmoney/open-sendmoney.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;
  savingAccount: number;
  myPayees: string[];
  notifications: boolean = true;
  constructor(
    private userData: UserdataService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.username = this.userData.userName;
    this.savingAccount = this.userData.savingAccount;
    this.myPayees = this.userData.myPayees;
  }
  refresh() {
    this.savingAccount = this.userData.savingAccount;
    console.log(this.userData.savingAccount);
  }
  openHistory() {
    this.router.navigateByUrl('wholepage/transfers');
  }
  opensend() {
    this.modalController
      .create({
        component: OpenSendmoneyComponent,
        componentProps: { payees: this.myPayees },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
  addPayee() {
    this.modalController
      .create({ component: AddingpayeeComponent })
      .then((modelEl) => {
        modelEl.present();
      });
  }
  logout() {
    this.router.navigateByUrl('home');
  }
  notsOnOff() {
    this.notifications = !this.notifications;
  }
  contactUs() {
    this.modalController
      .create({
        component: ContactusComponent,
      })
      .then((modelEl) => {
        modelEl.present();
      });
  }


}
