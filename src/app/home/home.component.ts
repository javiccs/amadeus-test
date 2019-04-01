import { Component, OnInit } from '@angular/core';
import {Passenger} from '../passengers/passenger.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  passenger: Passenger
  constructor() { }

  ngOnInit() {
  }
  test(currentPassanger: Passenger) {
      console.log(currentPassanger);
  }

}
