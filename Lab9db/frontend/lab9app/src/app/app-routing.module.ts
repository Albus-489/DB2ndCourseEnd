import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateInvestComponent } from './create-invest/create-invest.component';
import { CreateSecurComponent } from './create-secur/create-secur.component';
import { ShowClientComponent } from './show-client/show-client.component';
import { ShowInvestComponent } from './show-invest/show-invest.component';
import { ShowSecurComponent } from './show-secur/show-secur.component';

const routes: Routes = [
  { path: 'create-client', component: CreateClientComponent },
  { path: 'create-invest', component: CreateInvestComponent },
  { path: 'create-secur', component: CreateSecurComponent },
  { path: 'show-client', component: ShowClientComponent },
  { path: 'show-secur', component: ShowSecurComponent },
  { path: 'show-invest', component: ShowInvestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
