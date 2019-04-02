import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as paymentActions from '../state/payment.actions';
import * as fromPayment from '../state/payment.reducer';
import {Payment} from '../payment.model';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {
  paymentForm: FormGroup;
  submitted = false;
  creditCard=false;
  @Output() addPaymentChild = new EventEmitter<Payment>()

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromPayment.AppState>
  ) {
  }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      cardHolder: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expDate: ['', Validators.required],
    });
  }

  get f() {
    return this.paymentForm.controls;
  }


  createPayment() {
    if (!this.validate()) {
      this.submitted = true;
      return;
    }
    if (this.paymentForm.invalid) {
      this.submitted = true;
      return;
    }
    this.submitted = false;
    const newPayment: Payment = {
      cardHolder: this.paymentForm.get('cardHolder').value,
      cardNumber: this.paymentForm.get('cardNumber').value.toString().slice(12, 16),
      expDate: this.paymentForm.get('expDate').value
    };

    this.store.dispatch(new paymentActions.CreatePayment(newPayment));
    this.addPaymentChild.emit(newPayment)
    this.paymentForm.reset();

  }
  validate() {
    if (this.paymentForm.get('cardNumber').value.toString().length !== 16) {
      this.creditCard = true;
      return false;
    }
    this.creditCard = true;
    return true;
  }

  }
