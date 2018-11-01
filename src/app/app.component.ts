import {Component,} from '@angular/core';
import {DateFormatter} from '@angular/common/src/pipes/deprecated/intl';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  carName = '';
  carYear = '';
  forCycle = [
    {name:'Ford',year:1997},
    {name:'Wolkswagen', year:2008}
    ];

  getDate(){
    let dateString = '1968-11-16T00:00:00';
    // let newDate = new DatePipe(dateString);
    return dateString;
  }
  dangerStatus = false;
  turnIntoDanger(){
    this.dangerStatus = true;
  }
  pushButton() {
    if(this.carName != '')
    this.forCycle.push(this.carName);

  }

  constructor() {
  }
}
