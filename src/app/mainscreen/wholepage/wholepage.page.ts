/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wholepage',
  templateUrl: './wholepage.page.html',
  styleUrls: ['./wholepage.page.scss'],
})
export class WholepagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logSome(){
    console.log("refresh");
  }

}
