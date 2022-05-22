import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { InvestComponent } from './invest/invest.component';
import { SecurComponent } from './secur/secur.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'Clients', component: ClientsComponent},
  {path: 'Secur', component: SecurComponent},
  {path: 'Invest', component: InvestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
