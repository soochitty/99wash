import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Booking {
  private apiUrl = "https://99wash-backend-qipie6bvk-99wash99-2353s-projects.vercel.app/api/booking.js"; // backend URL

  constructor(public http: HttpClient) {}

  createBooking(booking: any) {
    return this.http.post(this.apiUrl, booking);
  }

  getBookings() {
    return this.http.get(this.apiUrl);
  } 
}
