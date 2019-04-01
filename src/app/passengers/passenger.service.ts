import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from './passenger.model';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private PassengerURL = 'http://localhost:3000/passengers';

  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.PassengerURL);
  }
  createPassenger(payload: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.PassengerURL, payload);
  }
  deletePassenger(payload: number) {
    return this.http.delete(`${this.PassengerURL}/${payload}`);
  }
}
