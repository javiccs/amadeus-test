import * as flightActions from './flight.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Flight } from '../flight.model';
import * as fromRoot from '../../state/app-state';

export interface FlightState extends EntityState<Flight> {
  selectedFlightId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  flights: FlightState;
}

export const flightAdapter: EntityAdapter<Flight> = createEntityAdapter<
  Flight
  >();

export const defaultFlight: FlightState = {
  ids: [],
  entities: {},
  selectedFlightId: null,
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = flightAdapter.getInitialState(defaultFlight);

export function flightReducer(
  state = initialState,
  action: flightActions.Action
): FlightState {
  switch (action.type) {
    case flightActions.FlightActionTypes.LOAD_FLIGHTS_SUCCESS: {
      return flightAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case flightActions.FlightActionTypes.LOAD_FLIGHTS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case flightActions.FlightActionTypes.CREATE_FLIGHT_SUCCESS: {
      return flightAdapter.addOne(action.payload, state);
    }
    case flightActions.FlightActionTypes.CREATE_FLIGHT_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case flightActions.FlightActionTypes.DELETE_FLIGHT_SUCCESS: {
      return flightAdapter.removeOne(action.payload, state);
    }
    case flightActions.FlightActionTypes.DELETE_FLIGHT_FAIL: {
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

const getFlightFeatureState = createFeatureSelector<FlightState>(
  'flights'
);

export const getFlights = createSelector(
  getFlightFeatureState,
  flightAdapter.getSelectors().selectAll
);

export const getFlightsLoading = createSelector(
  getFlightFeatureState,
  (state: FlightState) => state.loading
);

export const getFlightsLoaded = createSelector(
  getFlightFeatureState,
  (state: FlightState) => state.loaded
);

export const getError = createSelector(
  getFlightFeatureState,
  (state: FlightState) => state.error
);

export const getCurrentFlightId = createSelector(
  getFlightFeatureState,
  (state: FlightState) => state.selectedFlightId
);
export const getCurrentFlight = createSelector(
  getFlightFeatureState,
  getCurrentFlightId,
  state => state.entities[state.selectedFlightId]
);
