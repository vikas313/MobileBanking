import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfersPage } from './transfers.page';

const routes: Routes = [
  {
    path: '',
    component: TransfersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransfersPageRoutingModule {}
