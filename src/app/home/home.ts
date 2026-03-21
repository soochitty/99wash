import { Component, HostListener, ViewChild } from '@angular/core';
import { Header } from '../shared/header/header';
import { BookPickUpForm } from '../shared/book-pick-up-form/book-pick-up-form';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  @ViewChild(BookPickUpForm)
  bookPickupForm!: BookPickUpForm;  



  sections = [
    { title: 'Section 1', bg: "url('../../assets/Images/body-back.jpg'')" },
    { title: 'Section 2', bg: "url('../../assets/Images/back.jpg')" },
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    const sectionEls = document.querySelectorAll<HTMLElement>('.sec');

    sectionEls.forEach(section => {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        document.body.style.backgroundImage = section.getAttribute('data-bg') || '';
      }
    });
  }



}
