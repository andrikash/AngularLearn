import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bool = false;
  time(){
  setTimeout(()=>{
    this.bool = true;
    },4000
  );
  return this.bool
}
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
