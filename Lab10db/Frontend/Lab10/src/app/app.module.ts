import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
//import { AppserviceService } from './appservice.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './clients/clients.component';
import { SecurComponent } from './secur/secur.component';
import { InvestComponent } from './invest/invest.component';

@NgModule({
  declarations: [
    AppComponent,ClientsComponent, SecurComponent, InvestComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSelectModule,MatDividerModule,HttpClientModule,FormsModule,ReactiveFormsModule,MatCardModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
