import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PassengersModule} from './passengers/passengers.module';
import {FlightsModule} from './flights/flights.module';
import {PaymentsModule} from './payments/payments.module';
import { ToStringPipe } from './to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ToStringPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PassengersModule,
    FlightsModule,
    PaymentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
