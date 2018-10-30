import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carText = '';
  inputText = '';
  onKeyUp(value) {
    this.inputText = value;
  }
  addCar() {
    this.carText = 'helloooo';
  }

  constructor() {

  }
}
