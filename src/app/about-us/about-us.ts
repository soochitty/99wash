import { Component, ViewChild } from '@angular/core';
import { BookPickUpForm } from '../shared/book-pick-up-form/book-pick-up-form';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {
 @ViewChild(BookPickUpForm)
  bookPickupForm!: BookPickUpForm;  


}
