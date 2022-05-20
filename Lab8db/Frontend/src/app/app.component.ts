import { Component } from '@angular/core';
import { ShowComponent } from './show/show.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab8db';

  showTable(){
    location.href = '/show'
  }
}
