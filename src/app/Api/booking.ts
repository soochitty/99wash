import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Booking {
  private apiUrl = "http://localhost:5000/api/bookings"; // backend URL

  constructor(public http: HttpClient) {}

  createBooking(booking: any) {
    return this.http.post(this.apiUrl, booking);
  }

  getBookings() {
    return this.http.get(this.apiUrl);
  } 
}
