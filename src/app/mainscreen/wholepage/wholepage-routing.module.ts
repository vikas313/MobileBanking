import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholepagePage } from './wholepage.page';

const routes: Routes = [
  {
    path: '',
    component: WholepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WholepagePageRoutingModule {}
