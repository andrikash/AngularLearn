import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from '@angular/forms';
import {CarsComponent} from './cars/cars.component';
import {AddCarComponent} from './add-car/add-car.component';
import {PowPipe} from './pow.pipe';
import {CarFilterPipe} from './car-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
