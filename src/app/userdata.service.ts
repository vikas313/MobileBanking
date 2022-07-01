/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
  export interface Payment{
  name: string;
  amount?: number;
  account?: number;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
userName: string | number;
savingAccount: number = 8000;
myPayees: string[] = ['nitrogen','sodium','potassium','iranium','NACL'];
paymentData: Payment[] = [
  {
    name: 'nitrogen',
    amount:40,
    status:'success'
  },
  {
    name: 'sodium',
    amount:30,
    status:'pending'
  },
  {
    name: 'iranium',
    amount:20,
    status:'success'
  },
  {
    name: 'potassium',
    amount:60,
    status:'pending'
  },
  {
    name: 'NACL',
    amount:1000,
    status:'success'
  },
];
  constructor() { }
}
