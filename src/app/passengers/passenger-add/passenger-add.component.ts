import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as passengerActions from '../state/passenger.actions';
import * as fromPassenger from '../state/passenger.reducer';
import { Passenger } from '../passenger.model';

@Component({
  selector: 'app-passenger-add',
  templateUrl: './passenger-add.component.html',
  styleUrls: ['./passenger-add.component.css']
})
export class PassengerAddComponent implements OnInit {
  passengerForm: FormGroup;
  submitted = false;
  @Output() addPassengerChild = new EventEmitter<Passenger>()
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromPassenger.AppState>
  ) {}

  ngOnInit() {
    this.passengerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
    });
  }

  get f() { return this.passengerForm.controls; }


  createPassenger() {
    if (this.passengerForm.invalid) {
      this.submitted = true;
      return;
    }
    this.submitted = false;
    if (this.passengerForm.invalid) {
      return;
    }
    const newPassenger: Passenger = {
      firstName: this.passengerForm.get('firstName').value,
      lastName: this.passengerForm.get('lastName').value,
      birthday: this.passengerForm.get('birthday').value
    };

    this.store.dispatch(new passengerActions.CreatePassenger(newPassenger));
    this.addPassengerChild.emit(newPassenger)
    this.passengerForm.reset();
  }
}
