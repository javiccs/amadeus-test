import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as passengerActions from '../state/passenger.actions';
import * as fromPassenger from '../state/passenger.reducer';
import {Passenger} from '../passenger.model';


@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  passengers$: Observable<Passenger[]>;

  constructor(private store: Store<fromPassenger.AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new passengerActions.LoadPassengers());
    this.passengers$ = this.store.pipe(select(fromPassenger.getPassengers));
  }



}
