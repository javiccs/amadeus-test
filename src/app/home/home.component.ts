import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Passenger} from '../passengers/passenger.model';
import {Flight} from '../flights/flight.model';
import {Payment} from '../payments/payment.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  init: boolean;
  step: string;
  order: any = {};
  @Output() addPassengerChild = new EventEmitter<Passenger>();
  @Output() addFlightChild = new EventEmitter<Flight>();
  @Output() addPaymentChild = new EventEmitter<Payment>();

  constructor() {

  }

  ngOnInit() {
    this.init = true;
  }

  addPassenger(currentPassenger: Passenger) {
    this.order.passenger = currentPassenger;
    this.step = 'flight';
    console.log(this.order);
  }

  addFlight(currentFlight: Flight) {
    this.order.flight = currentFlight;
    this.step = 'payment';
    console.log(this.order);
  }
  addPayment(currentPayment: Flight) {
    console.log(currentPayment);
    this.order.payment = currentPayment;
    this.step = 'order';
    console.log(this.order);
  }


  continue() {
    this.init = false;
    this.step = 'passenger';
  }


}
