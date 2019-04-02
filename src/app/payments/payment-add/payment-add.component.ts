import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as paymentActions from '../state/payment.actions';
import * as fromPayment from '../state/payment.reducer';
import { Payment } from '../payment.model';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {
  paymentForm: FormGroup;
  submitted = false;
  @Output() addPaymentChild = new EventEmitter<Payment>()
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromPayment.AppState>
  ) {}

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      cardHolder: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expDate: ['', Validators.required],
    });
  }

  get f() { return this.paymentForm.controls; }


  createPayment() {
    if (this.paymentForm.invalid) {
      this.submitted = true;
      return;
    }
    this.submitted = false;
    if (this.paymentForm.invalid) {
      return;
    }
    const newPayment: Payment = {
      cardHolder: this.paymentForm.get('cardHolder').value,
      cardNumber: this.paymentForm.get('cardNumber').value,
      expDate: this.paymentForm.get('expDate').value
    };

    this.store.dispatch(new paymentActions.CreatePayment(newPayment));
    this.addPaymentChild.emit(newPayment)
    this.paymentForm.reset();
  }
}
