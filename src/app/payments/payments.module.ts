import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {PaymentAddComponent} from './payment-add/payment-add.component';
import {PaymentListComponent} from './payment-list/payment-list.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {paymentReducer} from './state/payment.reducer';
import {PaymentEffects} from './state/payment.effects';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

const paymentRoutes: Routes = [{path: '', component: PaymentComponent}];

@NgModule({
  declarations: [PaymentComponent, PaymentAddComponent, PaymentListComponent],
  imports: [CommonModule, RouterModule.forChild(paymentRoutes),
    StoreModule.forFeature('payments', paymentReducer), EffectsModule.forFeature([PaymentEffects]), ReactiveFormsModule,
    FormsModule],
  exports: [PaymentComponent, PaymentAddComponent, PaymentListComponent]
})
export class PaymentsModule {
}
