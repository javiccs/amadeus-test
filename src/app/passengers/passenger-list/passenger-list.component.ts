import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as passengerActions from '../state/passenger.actions';
import * as fromPassenger from '../state/passenger.reducer';
import { Passenger } from '../passenger.model';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  passengers$: Observable<Passenger[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromPassenger.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new passengerActions.LoadPassengers());
    this.passengers$ = this.store.pipe(select(fromPassenger.getPassengers));
    this.error$ = this.store.pipe(select(fromPassenger.getError));
  }

  deletePassenger(passenger: Passenger) {
    console.log(passenger)
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(new passengerActions.DeletePassenger(passenger.id));
    }
  }


}
