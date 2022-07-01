import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  @ViewChild('amount') amount: HTMLInputElement;
  constructor(private userData: UserdataService,private alertCtrl: AlertController) {}

  ngOnInit() {}
  addFunds() {
    this.userData.savingAccount += +this.amount.value;
    this.alertCtrl.create({
      message:`$${this.amount.value} added to your account`,
      header:'funds added',
      buttons:['okay']
    })
  .then(alertEl=>{
    alertEl.present();
  });
    console.log(this.userData.savingAccount);
  }
}
