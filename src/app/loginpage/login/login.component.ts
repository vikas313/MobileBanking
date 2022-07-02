/* eslint-disable @typescript-eslint/member-ordering */
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UserdataService } from 'src/app/userdata.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userData: UserdataService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  @ViewChild('email') email: HTMLInputElement;
  @ViewChild('password') password: HTMLInputElement;

  ngOnInit() {}
  loggedIn() {
    if (this.email.value === '') {
      this.alertCtrl
        .create({
          message: 'invalid inputs',
          header: 'Invalid',
          buttons: ['okay'],
        })
        .then((alertEl) => {
          alertEl.present();
        });
    } else {
      this.userData.userName = this.email.value;
      this.router.navigateByUrl('wholepage/dashboard');
    }
  }
  signUp(){
    this.modalCtrl.create({
      component:SignupComponent
    })
    .then(modalEl=>{
      modalEl.present();
    });

  }
}
