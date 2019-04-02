import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private PaymentURL = 'http://localhost:3000/payments';

  constructor(private http: HttpClient) {}

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.PaymentURL);
  }
  createPayment(payload: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.PaymentURL, payload);
  }
  deletePayment(payload: number) {
    return this.http.delete(`${this.PaymentURL}/${payload}`);
  }
}
