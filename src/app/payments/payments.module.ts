import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { PaymentListComponent } from './payment-list/payment-list.component';

@NgModule({
  declarations: [PaymentComponent, PaymentAddComponent, PaymentListComponent],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }
