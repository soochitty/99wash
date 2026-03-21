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

  timeSlot = ["10:00 am - 2:00 pm","2:00 pm - 6:00 pm"]
  services = [ 'Dry clean','Steam Iron','Shoe laundry', 'Wash & Fold' ,'Wash & Iron' ,'Express laundry']

  constructor(private fb: FormBuilder,
    private bookingService: Booking
  ) {
    this.pickupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      address: ['',Validators.required],
      timeSlot: ['Select Time Slot',Validators.required],
      service:['',Validators.required],
      pickupDate:['',Validators.required],
      laundryItems:['']
    });
  }

 
  openPopup() {
    this.isClosing = false;
    this.isVisible = true;
  }

  closePopup() {
    this.isClosing = true;
    this.isVisible=false
    // setTimeout(() => {
    //   this.isVisible = false;
    // }, 400); // match animation duration
  }


  onSubmit() {
    if (this.pickupForm.valid) {
      console.log('Form Data:', this.pickupForm.value);
      alert('Pickup request submitted!');
      this.bookingService.createBooking(this.pickupForm.value).subscribe({
    next: (res:any) => alert("Booking saved in DB!"),
    error: (err:any) => console.error(err)
  });
      this.closePopup();
    } else {
      this.pickupForm.markAllAsTouched();
    }
  }
}
