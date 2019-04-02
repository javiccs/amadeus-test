import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Passenger} from '../passengers/passenger.model';
import {Flight} from '../flights/flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  init: boolean;
  step: string;
  order: any = {};
  @Output() addPassengerChild = new EventEmitter<Passenger>()
  @Output() addFlightChild = new EventEmitter<Flight>()

  constructor() {

  }

  ngOnInit() {
    this.init = true;

  }

  addPassenger(currentPassenger: Passenger) {
    console.log(currentPassenger)
    this.order.passenger = currentPassenger;
    this.step = 'flight';
    console.log(this.order);
  }

  addFlight(currentFlight: Flight) {
    console.log(currentFlight)
    this.order.flight = currentFlight
    this.step = 'order';
    console.log(this.order);
  }


  continue() {
    this.init = false;
    this.step = 'passenger';
  }


}
