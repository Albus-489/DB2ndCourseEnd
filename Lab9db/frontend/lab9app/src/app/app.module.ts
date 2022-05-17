import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateInvestComponent } from './create-invest/create-invest.component';
import { CreateSecurComponent } from './create-secur/create-secur.component';
import { ShowSecurComponent } from './show-secur/show-secur.component';
import { ShowClientComponent } from './show-client/show-client.component';
import { ShowInvestComponent } from './show-invest/show-invest.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    CreateInvestComponent,
    CreateSecurComponent,
    ShowSecurComponent,
    ShowClientComponent,
    ShowInvestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
