import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  push = false;
  carName = '';
  forCycle = ['Giga','Andrew','Ieshua','Kik','Horok'];
  pushButton() {
    this.push = true;
  }

  constructor() {
  }
}
