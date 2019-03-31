import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';
import { PassengerAddComponent } from './passenger-add/passenger-add.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';

const passagerRoutes: Routes = [{ path: '', component: PassengerComponent }];

@NgModule({
  declarations: [PassengerComponent, PassengerAddComponent, PassengerEditComponent, PassengerListComponent],
  imports: [CommonModule, RouterModule.forChild(passagerRoutes)],
})
export class PassengersModule { }
