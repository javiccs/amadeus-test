import { Action } from '@ngrx/store';
import { Update } from "@ngrx/entity"
import { Flight } from '../flight.model';

export enum FlightActionTypes {
  LOAD_FLIGHTS = '[Flight] Load Flights',
  LOAD_FLIGHTS_SUCCESS = '[Flight] Load Flights Success',
  LOAD_FLIGHTS_FAIL = '[Flight] Load Flights Fail',
  CREATE_FLIGHT = '[Flight] Create Flights',
  CREATE_FLIGHT_SUCCESS = '[Flight] Create Flights Success',
  CREATE_FLIGHT_FAIL = '[Flight] Create Flights Fail',
  DELETE_FLIGHT = '[Flight] Delete Flights',
  DELETE_FLIGHT_SUCCESS = '[Flight] Delete Flights Success',
  DELETE_FLIGHT_FAIL = '[Flight] Delete Flights Fail',
}

export class LoadFlights implements Action {
  readonly type = FlightActionTypes.LOAD_FLIGHTS;
}

export class LoadFlightsSuccess implements Action {
  readonly type = FlightActionTypes.LOAD_FLIGHTS_SUCCESS;

  constructor(public payload: Flight[]) {}
}

export class LoadFlightsFail implements Action {
  readonly type = FlightActionTypes.LOAD_FLIGHTS_FAIL;

  constructor(public payload: string) {}
}
//
export class CreateFlight implements Action {
  readonly type = FlightActionTypes.CREATE_FLIGHT;

  constructor(public payload: Flight) {}
}

export class CreateFlightSuccess implements Action {
  readonly type = FlightActionTypes.CREATE_FLIGHT_SUCCESS;

  constructor(public payload: Flight) {}
}

export class CreateFlightFail implements Action {
  readonly type = FlightActionTypes.CREATE_FLIGHT_FAIL;

  constructor(public payload: string) {}
}
//
export class DeleteFlight implements Action {
  readonly type = FlightActionTypes.DELETE_FLIGHT;

  constructor(public payload: number) {}
}

export class DeleteFlightSuccess implements Action {
  readonly type = FlightActionTypes.DELETE_FLIGHT_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteFlightFail implements Action {
  readonly type = FlightActionTypes.DELETE_FLIGHT_FAIL;

  constructor(public payload: string) {
  }

}
export type Action = LoadFlights | LoadFlightsSuccess | LoadFlightsFail   | CreateFlight
  | CreateFlightSuccess
  | CreateFlightFail
  | DeleteFlight
  | DeleteFlightSuccess
  | DeleteFlightFail;
