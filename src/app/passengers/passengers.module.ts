import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';
import { PassengerAddComponent } from './passenger-add/passenger-add.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { StoreModule } from "@ngrx/store";
import { passengerReducer } from "./state/passenger.reducer";

const passengerRoutes: Routes = [{ path: '', component: PassengerComponent }];

@NgModule({
  declarations: [PassengerComponent, PassengerAddComponent, PassengerEditComponent, PassengerListComponent],
  imports: [CommonModule, RouterModule.forChild(passengerRoutes),
    StoreModule.forFeature("passengers", passengerReducer)],
})
export class PassengersModule { }
