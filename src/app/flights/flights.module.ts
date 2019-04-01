import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FlightComponent} from './flight/flight.component';
import {FlightAddComponent} from './flight-add/flight-add.component';
import {FlightListComponent} from './flight-list/flight-list.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule, Actions} from '@ngrx/effects';
import {flightReducer} from './state/flight.reducer';
import {FlightEffects} from './state/flight.effects';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

const flightRoutes: Routes = [{path: '', component: FlightComponent}];

@NgModule({
  declarations: [FlightComponent, FlightAddComponent, FlightListComponent],
  imports: [CommonModule, RouterModule.forChild(flightRoutes),
    StoreModule.forFeature('flights', flightReducer), EffectsModule.forFeature([FlightEffects]), ReactiveFormsModule,
    FormsModule],
  exports: [FlightComponent, FlightAddComponent, FlightListComponent]
})
export class FlightsModule {
}
