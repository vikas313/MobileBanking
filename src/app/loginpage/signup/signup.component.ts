import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  onCancel(){
    this.modalCtrl.dismiss();

  }

}
