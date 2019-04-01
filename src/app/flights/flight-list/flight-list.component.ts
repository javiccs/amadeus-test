import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as flightActions from '../state/flight.actions';
import * as fromFlight from '../state/flight.reducer';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights$: Observable<Flight[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromFlight.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new flightActions.LoadFlights());
    this.flights$ = this.store.pipe(select(fromFlight.getFlights));
  }

  deleteFlight(flight: Flight) {
    console.log(flight)
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(new flightActions.DeleteFlight(flight.id));
    }
  }


}