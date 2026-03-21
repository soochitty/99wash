import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { BookPickUpForm } from './shared/book-pick-up-form/book-pick-up-form';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Services } from './services/services';
import { SharedModule } from './shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms'
import { provideHttpClient, withInterceptors } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Home,
    AboutUs,
    ContactUs,
    Services
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,ReactiveFormsModule
  ],
  providers: [
    provideHttpClient() , // ✅ new way
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
