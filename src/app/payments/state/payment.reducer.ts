import * as paymentActions from './payment.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Payment } from '../payment.model';
import * as fromRoot from '../../state/app-state';

export interface PaymentState extends EntityState<Payment> {
  selectedPaymentId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  payments: PaymentState;
}

export const paymentAdapter: EntityAdapter<Payment> = createEntityAdapter<
  Payment
  >();

export const defaultPayment: PaymentState = {
  ids: [],
  entities: {},
  selectedPaymentId: null,
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = paymentAdapter.getInitialState(defaultPayment);

export function paymentReducer(
  state = initialState,
  action: paymentActions.Action
): PaymentState {
  switch (action.type) {
    case paymentActions.PaymentActionTypes.LOAD_PAYMENTS_SUCCESS: {
      return paymentAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case paymentActions.PaymentActionTypes.LOAD_PAYMENTS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case paymentActions.PaymentActionTypes.CREATE_PAYMENT_SUCCESS: {
      return paymentAdapter.addOne(action.payload, state);
    }
    case paymentActions.PaymentActionTypes.CREATE_PAYMENT_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case paymentActions.PaymentActionTypes.DELETE_PAYMENT_SUCCESS: {
      return paymentAdapter.removeOne(action.payload, state);
    }
    case paymentActions.PaymentActionTypes.DELETE_PAYMENT_FAIL: {
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

const getPaymentFeatureState = createFeatureSelector<PaymentState>(
  'payments'
);

export const getPayments = createSelector(
  getPaymentFeatureState,
  paymentAdapter.getSelectors().selectAll
);

export const getPaymentsLoading = createSelector(
  getPaymentFeatureState,
  (state: PaymentState) => state.loading
);

export const getPaymentsLoaded = createSelector(
  getPaymentFeatureState,
  (state: PaymentState) => state.loaded
);

export const getError = createSelector(
  getPaymentFeatureState,
  (state: PaymentState) => state.error
);

export const getCurrentPaymentId = createSelector(
  getPaymentFeatureState,
  (state: PaymentState) => state.selectedPaymentId
);
export const getCurrentPayment = createSelector(
  getPaymentFeatureState,
  getCurrentPaymentId,
  state => state.entities[state.selectedPaymentId]
);
