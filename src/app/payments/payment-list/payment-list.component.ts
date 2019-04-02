import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as paymentActions from '../state/payment.actions';
import * as fromPayment from '../state/payment.reducer';
import { Payment } from '../payment.model';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments$: Observable<Payment[]>;
  @Output() getPaymentsChild = new EventEmitter<any>();

  constructor(private store: Store<fromPayment.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new paymentActions.LoadPayments());
    this.payments$ = this.store.pipe(select(fromPayment.getPayments));
    this.payments$.subscribe(res => {
      this.getPaymentsChild.emit(res);
    });
  }

  deletePayment(payment: Payment) {
    if (confirm('Are you sure you want to delete this payment method?')) {
      this.store.dispatch(new paymentActions.DeletePayment(payment.id));
    }
  }


}
