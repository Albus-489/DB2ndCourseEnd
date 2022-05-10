import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ApiserviceService } from './apiservice.service';
import { CreateSecurComponent } from './create-secur/create-secur.component';
import { ReadSecurComponent } from './read-secur/read-secur.component';
import { ReadInvestComponent } from './read-invest/read-invest.component';
import { CreateInvestComponent } from './create-invest/create-invest.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    CreateSecurComponent,
    ReadSecurComponent,
    ReadInvestComponent,
    CreateInvestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
