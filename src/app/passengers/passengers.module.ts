import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PassengerComponent} from './passenger/passenger.component';
import {PassengerAddComponent} from './passenger-add/passenger-add.component';
import {PassengerListComponent} from './passenger-list/passenger-list.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule, Actions} from '@ngrx/effects';
import {passengerReducer} from './state/passenger.reducer';
import {PassengerEffects} from './state/passenger.effects';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

const passengerRoutes: Routes = [{path: '', component: PassengerComponent}];

@NgModule({
  declarations: [PassengerComponent, PassengerAddComponent, PassengerListComponent],
  imports: [CommonModule, RouterModule.forChild(passengerRoutes),
    StoreModule.forFeature('passengers', passengerReducer), EffectsModule.forFeature([PassengerEffects]), ReactiveFormsModule,
    FormsModule],
  exports: [PassengerComponent, PassengerAddComponent, PassengerListComponent]
})
export class PassengersModule {
}
