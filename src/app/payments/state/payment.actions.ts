import { Action } from '@ngrx/store';
import { Payment } from '../payment.model';

export enum PaymentActionTypes {
  LOAD_PAYMENTS = '[Payment] Load Payments',
  LOAD_PAYMENTS_SUCCESS = '[Payment] Load Payments Success',
  LOAD_PAYMENTS_FAIL = '[Payment] Load Payments Fail',
  CREATE_PAYMENT = '[Payment] Create Payments',
  CREATE_PAYMENT_SUCCESS = '[Payment] Create Payments Success',
  CREATE_PAYMENT_FAIL = '[Payment] Create Payments Fail',
  DELETE_PAYMENT = '[Payment] Delete Payments',
  DELETE_PAYMENT_SUCCESS = '[Payment] Delete Payments Success',
  DELETE_PAYMENT_FAIL = '[Payment] Delete Payments Fail',
}

export class LoadPayments implements Action {
  readonly type = PaymentActionTypes.LOAD_PAYMENTS;
}

export class LoadPaymentsSuccess implements Action {
  readonly type = PaymentActionTypes.LOAD_PAYMENTS_SUCCESS;

  constructor(public payload: Payment[]) {}
}

export class LoadPaymentsFail implements Action {
  readonly type = PaymentActionTypes.LOAD_PAYMENTS_FAIL;

  constructor(public payload: string) {}
}
//
export class CreatePayment implements Action {
  readonly type = PaymentActionTypes.CREATE_PAYMENT;

  constructor(public payload: Payment) {}
}

export class CreatePaymentSuccess implements Action {
  readonly type = PaymentActionTypes.CREATE_PAYMENT_SUCCESS;

  constructor(public payload: Payment) {}
}

export class CreatePaymentFail implements Action {
  readonly type = PaymentActionTypes.CREATE_PAYMENT_FAIL;

  constructor(public payload: string) {}
}
//
export class DeletePayment implements Action {
  readonly type = PaymentActionTypes.DELETE_PAYMENT;

  constructor(public payload: number) {}
}

export class DeletePaymentSuccess implements Action {
  readonly type = PaymentActionTypes.DELETE_PAYMENT_SUCCESS;

  constructor(public payload: number) {}
}

export class DeletePaymentFail implements Action {
  readonly type = PaymentActionTypes.DELETE_PAYMENT_FAIL;

  constructor(public payload: string) {
  }

}
export type Action = LoadPayments | LoadPaymentsSuccess | LoadPaymentsFail   | CreatePayment
  | CreatePaymentSuccess
  | CreatePaymentFail
  | DeletePayment
  | DeletePaymentSuccess
  | DeletePaymentFail;
