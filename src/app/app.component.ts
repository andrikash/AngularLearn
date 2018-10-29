import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carText = '';
  inputText = '';
  onKeyUp(event : Event){
  this.inputText = (<HTMLInputElement>event.target).value;
    // console.log(this.inputText);
  }
  addCar(){
    this.carText = 'helloooo';
  }
  constructor() {

  }
}
