import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PaymentService } from '../payment.service';
import * as paymentActions from '../state/payment.actions';
import { Payment } from '../payment.model';

@Injectable()
export class PaymentEffects {
  constructor(
    private actions$: Actions,
    private paymentService: PaymentService
  ) {}

  @Effect()
  loadPayments$: Observable<Action> = this.actions$.pipe(
    ofType<paymentActions.LoadPayments>(
      paymentActions.PaymentActionTypes.LOAD_PAYMENTS
    ),
    mergeMap((action: paymentActions.LoadPayments) =>
      this.paymentService.getPayments().pipe(
        map(
          (payments: Payment[]) =>
            new paymentActions.LoadPaymentsSuccess(payments)
        ),
        catchError(err => of(new paymentActions.LoadPaymentsFail(err)))
      )
    )
  );

  @Effect()
  createPayment$: Observable<Action> = this.actions$.pipe(
    ofType<paymentActions.CreatePayment>(
      paymentActions.PaymentActionTypes.CREATE_PAYMENT
    ),
    map((action: paymentActions.CreatePayment) => action.payload),
    mergeMap((payment: Payment) =>
      this.paymentService.createPayment(payment).pipe(
        map(
          (newPayment: Payment) =>
            new paymentActions.CreatePaymentSuccess(newPayment)
        ),
        catchError(err => of(new paymentActions.CreatePaymentFail(err)))
      )
    )
  );

  @Effect()
  deletePayment$: Observable<Action> = this.actions$.pipe(
    ofType<paymentActions.DeletePayment>(
      paymentActions.PaymentActionTypes.DELETE_PAYMENT
    ),
    map((action: paymentActions.DeletePayment) => action.payload),
    mergeMap((id: number) =>
      this.paymentService.deletePayment(id).pipe(
        map(() => new paymentActions.DeletePaymentSuccess(id)),
        catchError(err => of(new paymentActions.DeletePaymentFail(err)))
      )
    )
  );

}
