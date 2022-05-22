import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab10';

  constructor() { }

  selected='noneop';
  rel(){
    this.selected = 'noneop'
  }

  // ? Color changer
  colors = ['primary', 'warn' ,'accent']
  curentclr = 0
  changeColor(){
    if(this.curentclr < 2){
      this.curentclr += 1;
    }else{
      this.curentclr = 0;
    }
  }
  //? ////////////////

}
