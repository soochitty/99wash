import { Component, EventEmitter, Output, output, ViewChild } from '@angular/core';
import { BookPickUpForm } from '../book-pick-up-form/book-pick-up-form';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

   @ViewChild(BookPickUpForm)
  bookPickupForm!: BookPickUpForm; 
}
