import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { FlightService } from '../flight.service';
import * as flightActions from '../state/flight.actions';
import { Flight } from '../flight.model';

@Injectable()
export class FlightEffects {
  constructor(
    private actions$: Actions,
    private flightService: FlightService
  ) {}

  @Effect()
  loadFlights$: Observable<Action> = this.actions$.pipe(
    ofType<flightActions.LoadFlights>(
      flightActions.FlightActionTypes.LOAD_FLIGHTS
    ),
    mergeMap((action: flightActions.LoadFlights) =>
      this.flightService.getFlights().pipe(
        map(
          (flights: Flight[]) =>
            new flightActions.LoadFlightsSuccess(flights)
        ),
        catchError(err => of(new flightActions.LoadFlightsFail(err)))
      )
    )
  );

  @Effect()
  createFlight$: Observable<Action> = this.actions$.pipe(
    ofType<flightActions.CreateFlight>(
      flightActions.FlightActionTypes.CREATE_FLIGHT
    ),
    map((action: flightActions.CreateFlight) => action.payload),
    mergeMap((flight: Flight) =>
      this.flightService.createFlight(flight).pipe(
        map(
          (newFlight: Flight) =>
            new flightActions.CreateFlightSuccess(newFlight)
        ),
        catchError(err => of(new flightActions.CreateFlightFail(err)))
      )
    )
  );

  @Effect()
  deleteFlight$: Observable<Action> = this.actions$.pipe(
    ofType<flightActions.DeleteFlight>(
      flightActions.FlightActionTypes.DELETE_FLIGHT
    ),
    map((action: flightActions.DeleteFlight) => action.payload),
    mergeMap((id: number) =>
      this.flightService.deleteFlight(id).pipe(
        map(() => new flightActions.DeleteFlightSuccess(id)),
        catchError(err => of(new flightActions.DeleteFlightFail(err)))
      )
    )
  );

}
