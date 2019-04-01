import { Action } from '@ngrx/store';
import { Update } from "@ngrx/entity"
import { Passenger } from '../passenger.model';

export enum PassengerActionTypes {
  LOAD_PASSENGERS = '[Passenger] Load Passengers',
  LOAD_PASSENGERS_SUCCESS = '[Passenger] Load Passengers Success',
  LOAD_PASSENGERS_FAIL = '[Passenger] Load Passengers Fail',
  CREATE_PASSENGER = '[Passenger] Create Passengers',
  CREATE_PASSENGER_SUCCESS = '[Passenger] Create Passengers Success',
  CREATE_PASSENGER_FAIL = '[Passenger] Create Passengers Fail',
  DELETE_PASSENGER = '[Passenger] Delete Passengers',
  DELETE_PASSENGER_SUCCESS = '[Passenger] Delete Passengers Success',
  DELETE_PASSENGER_FAIL = '[Passenger] Delete Passengers Fail',
}

export class LoadPassengers implements Action {
  readonly type = PassengerActionTypes.LOAD_PASSENGERS;
}

export class LoadPassengersSuccess implements Action {
  readonly type = PassengerActionTypes.LOAD_PASSENGERS_SUCCESS;

  constructor(public payload: Passenger[]) {}
}

export class LoadPassengersFail implements Action {
  readonly type = PassengerActionTypes.LOAD_PASSENGERS_FAIL;

  constructor(public payload: string) {}
}
//
export class CreatePassenger implements Action {
  readonly type = PassengerActionTypes.CREATE_PASSENGER;

  constructor(public payload: Passenger) {}
}

export class CreatePassengerSuccess implements Action {
  readonly type = PassengerActionTypes.CREATE_PASSENGER_SUCCESS;

  constructor(public payload: Passenger) {}
}

export class CreatePassengerFail implements Action {
  readonly type = PassengerActionTypes.CREATE_PASSENGER_FAIL;

  constructor(public payload: string) {}
}
//
export class DeletePassenger implements Action {
  readonly type = PassengerActionTypes.DELETE_PASSENGER;

  constructor(public payload: number) {}
}

export class DeletePassengerSuccess implements Action {
  readonly type = PassengerActionTypes.DELETE_PASSENGER_SUCCESS;

  constructor(public payload: number) {}
}

export class DeletePassengerFail implements Action {
  readonly type = PassengerActionTypes.DELETE_PASSENGER_FAIL;

  constructor(public payload: string) {
  }

}
export type Action = LoadPassengers | LoadPassengersSuccess | LoadPassengersFail   | CreatePassenger
  | CreatePassengerSuccess
  | CreatePassengerFail
  | DeletePassenger
  | DeletePassengerSuccess
  | DeletePassengerFail;
