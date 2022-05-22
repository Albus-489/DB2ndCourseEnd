import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab10';

  selected='noneop';
  rel(){
    this.selected = 'noneop'
  }

  colors = ['warn', 'primary' ,'accent']
  curentclr = 0
  changeColor(){
    if(this.curentclr < 2){
      this.curentclr += 1;
    }else{
      this.curentclr = 0;
    }
  }
}
