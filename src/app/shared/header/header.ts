import { Component, EventEmitter, Output, output, ViewChild } from '@angular/core';
import { BookPickUpForm } from '../book-pick-up-form/book-pick-up-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

   @ViewChild(BookPickUpForm)
  bookPickupForm!: BookPickUpForm; 

 openMenu = false;

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }

  closeMenu(): void {
    this.openMenu = false;
  }
}
