import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private FlightURL = 'http://localhost:3000/flights';

  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.FlightURL);
  }
  createFlight(payload: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.FlightURL, payload);
  }
  deleteFlight(payload: number) {
    return this.http.delete(`${this.FlightURL}/${payload}`);
  }
}
