import * as passengerActions from './passenger.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Passenger } from '../passenger.model';
import * as fromRoot from '../../state/app-state';

export interface PassengerState extends EntityState<Passenger> {
  selectedPassengerId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  passengers: PassengerState;
}

export const passengerAdapter: EntityAdapter<Passenger> = createEntityAdapter<
  Passenger
  >();

export const defaultPassenger: PassengerState = {
  ids: [],
  entities: {},
  selectedPassengerId: null,
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = passengerAdapter.getInitialState(defaultPassenger);

export function passengerReducer(
  state = initialState,
  action: passengerActions.Action
): PassengerState {
  switch (action.type) {
    case passengerActions.PassengerActionTypes.LOAD_PASSENGERS_SUCCESS: {
      return passengerAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case passengerActions.PassengerActionTypes.LOAD_PASSENGERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case passengerActions.PassengerActionTypes.CREATE_PASSENGER_SUCCESS: {
      return passengerAdapter.addOne(action.payload, state);
    }
    case passengerActions.PassengerActionTypes.CREATE_PASSENGER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case passengerActions.PassengerActionTypes.DELETE_PASSENGER_SUCCESS: {
      return passengerAdapter.removeOne(action.payload, state);
    }
    case passengerActions.PassengerActionTypes.DELETE_PASSENGER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getPassengerFeatureState = createFeatureSelector<PassengerState>(
  'passengers'
);

export const getPassengers = createSelector(
  getPassengerFeatureState,
  passengerAdapter.getSelectors().selectAll
);

export const getPassengersLoading = createSelector(
  getPassengerFeatureState,
  (state: PassengerState) => state.loading
);

export const getPassengersLoaded = createSelector(
  getPassengerFeatureState,
  (state: PassengerState) => state.loaded
);

export const getError = createSelector(
  getPassengerFeatureState,
  (state: PassengerState) => state.error
);

export const getCurrentPassengerId = createSelector(
  getPassengerFeatureState,
  (state: PassengerState) => state.selectedPassengerId
);
export const getCurrentPassenger = createSelector(
  getPassengerFeatureState,
  getCurrentPassengerId,
  state => state.entities[state.selectedPassengerId]
);
