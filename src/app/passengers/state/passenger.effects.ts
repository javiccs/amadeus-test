import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PassengerService } from '../passenger.service';
import * as passengerActions from '../state/passenger.actions';
import { Passenger } from '../passenger.model';

@Injectable()
export class PassengerEffects {
  constructor(
    private actions$: Actions,
    private passengerService: PassengerService
  ) {}

  @Effect()
  loadPassengers$: Observable<Action> = this.actions$.pipe(
    ofType<passengerActions.LoadPassengers>(
      passengerActions.PassengerActionTypes.LOAD_PASSENGERS
    ),
    mergeMap((action: passengerActions.LoadPassengers) =>
      this.passengerService.getPassengers().pipe(
        map(
          (passengers: Passenger[]) =>
            new passengerActions.LoadPassengersSuccess(passengers)
        ),
        catchError(err => of(new passengerActions.LoadPassengersFail(err)))
      )
    )
  );

  @Effect()
  createPassenger$: Observable<Action> = this.actions$.pipe(
    ofType<passengerActions.CreatePassenger>(
      passengerActions.PassengerActionTypes.CREATE_PASSENGER
    ),
    map((action: passengerActions.CreatePassenger) => action.payload),
    mergeMap((passenger: Passenger) =>
      this.passengerService.createPassenger(passenger).pipe(
        map(
          (newPassenger: Passenger) =>
            new passengerActions.CreatePassengerSuccess(newPassenger)
        ),
        catchError(err => of(new passengerActions.CreatePassengerFail(err)))
      )
    )
  );

  @Effect()
  deletePassenger$: Observable<Action> = this.actions$.pipe(
    ofType<passengerActions.DeletePassenger>(
      passengerActions.PassengerActionTypes.DELETE_PASSENGER
    ),
    map((action: passengerActions.DeletePassenger) => action.payload),
    mergeMap((id: number) =>
      this.passengerService.deletePassenger(id).pipe(
        map(() => new passengerActions.DeletePassengerSuccess(id)),
        catchError(err => of(new passengerActions.DeletePassengerFail(err)))
      )
    )
  );

}
