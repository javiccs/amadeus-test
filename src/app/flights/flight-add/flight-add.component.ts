import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as flightActions from '../state/flight.actions';
import * as fromFlight from '../state/flight.reducer';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.css']
})
export class FlightAddComponent implements OnInit {
  flightForm: FormGroup;
  submitted = false;
  @Output() addFlightChild = new EventEmitter<Flight>()
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromFlight.AppState>
  ) {}

  ngOnInit() {
    this.flightForm = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  get f() { return this.flightForm.controls; }


  createFlight() {
    if (this.flightForm.invalid) {
      this.submitted = true;
      return;
    }
    this.submitted = false;
    if (this.flightForm.invalid) {
      return;
    }
    const newFlight: Flight = {
      origin: this.flightForm.get('origin').value,
      destination: this.flightForm.get('destination').value,
      departureDate: this.flightForm.get('departureDate').value,
      price: this.flightForm.get('price').value
    };

    this.store.dispatch(new flightActions.CreateFlight(newFlight));
    this.addFlightChild.emit(newFlight)
    this.flightForm.reset();
  }
}
