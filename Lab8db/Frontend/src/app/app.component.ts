import { Component } from '@angular/core';
import { ShowComponent } from './show/show.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  showTable(){
    location.href = '/show'
  }
}
