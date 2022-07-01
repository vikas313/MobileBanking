/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';


@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.page.html',
  styleUrls: ['./transfers.page.scss'],
})
export class TransfersPage implements OnInit {
  paymentData: any[];
  constructor(private userData: UserdataService) { }

  ngOnInit() {
    this.paymentData = this.userData.paymentData;
  }

}
