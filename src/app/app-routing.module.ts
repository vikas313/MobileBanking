import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPageModule } from './Dashboard/dashboard/dashboard.module';
import { WholepagePage } from './mainscreen/wholepage/wholepage.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'wholepage',
    component:WholepagePage,
    children:[
      {
        path:'',
        loadChildren: () => import('./mainscreen/wholepage/wholepage.module').then( m => m.WholepagePageModule)
      },

      {
        path:'dashboard',
        loadChildren:()=>import('./Dashboard/dashboard/dashboard.module').then(m=>DashboardPageModule)

      },
      {
        path:'accounts',
        loadChildren:()=>import('./Accounts/accounts/accounts.module').then(m=>m.AccountsPageModule)
      },
      {
        path:'transfers',
        loadChildren:()=>import('./Transfers/transfers/transfers.module').then(m=>m.TransfersPageModule)
      },
      {
        path:'deposit',
        loadChildren:()=>import('./Depsoit/deposit/deposit.module').then(m=>m.DepositPageModule)
      },
    ]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
