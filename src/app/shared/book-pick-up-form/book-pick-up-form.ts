import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Booking } from '../../Api/booking';

@Component({
  selector: 'app-book-pick-up-form',
  standalone: false,
  templateUrl: './book-pick-up-form.html',
  styleUrl: './book-pick-up-form.css'
})
export class BookPickUpForm {
  isVisible = false;
  isClosing = false;
  pickupForm: FormGroup;

  timeSlot = ["10:00 am - 2:00 pm", "2:00 pm - 6:00 pm"]
  services = ['Dry clean', 'Steam Iron', 'Shoe laundry', 'Wash & Fold', 'Wash & Iron', 'Express laundry']

  constructor(private fb: FormBuilder,
    private bookingService: Booking
  ) {
    this.pickupForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      timeSlot: ['', Validators.required],
      service: ['', Validators.required],
      pickupDate: [this.getToday(), Validators.required],
      laundryItems: ['', Validators.required]
    });
  }

  minDate: string = this.getToday();

  getToday(): string {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().split('T')[0];
  }
  setMinDate() {
    this.minDate = this.getToday();
  }


  openPopup() {
    this.isClosing = false;
    this.isVisible = true;
  }

  closePopup() {
    this.isClosing = true;
    this.isVisible = false
    // setTimeout(() => {
    //   this.isVisible = false;
    // }, 400); // match animation duration
  }


  onSubmit() {

    if (this.pickupForm.valid) {
      console.log('Form Data:', this.pickupForm.value);
      const message =
        `Hello , I would like to book a laundry pick-up with the following details:

Name: ${this.pickupForm.value.name}
Service: ${this.pickupForm.value.service}
PickupDate: ${this.pickupForm.value.pickupDate}
Pickup Address: ${this.pickupForm.value.address}
Garments: ${this.pickupForm.value.laundryItems}.
  `;

      this.openWhatsApp(message);
      this.closePopup();
    } else {
      this.pickupForm.markAllAsTouched();
    }
  }

  openWhatsApp(message: string) {
    console.log(message);
    const phoneNumber = '919136967627'; // your WhatsApp business number (no +)

    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  }
}
