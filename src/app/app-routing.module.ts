import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {FlightsModule} from './flights/flights.module';
import {PassengersModule} from './passengers/passengers.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'passengers',
    loadChildren: () => PassengersModule
  },
  {
    path: 'flights',
    loadChildren: () => FlightsModule
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
