import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { BookPickUpForm } from './book-pick-up-form/book-pick-up-form';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ServiceCard } from './service-card/service-card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Testimonial } from './testimonial/testimonial';
import { OfferMarquee } from './offer-marquee/offer-marquee';



@NgModule({
  declarations: [
    Header,
    Footer,
    BookPickUpForm,
    ServiceCard,
    Testimonial,
    OfferMarquee
  ],
  imports: [
    CommonModule,
    MatToolbar,
    MatIconModule,
    MatButtonModule, MatMenuModule,ReactiveFormsModule,RouterModule
  ],
  exports: [
    Header,
    Footer,
    BookPickUpForm,
    ServiceCard,
    Testimonial,
    OfferMarquee
  ]
})
export class SharedModule { }
