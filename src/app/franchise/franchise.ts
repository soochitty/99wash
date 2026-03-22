import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-franchise',
  standalone: false,
  templateUrl: './franchise.html',
  styleUrl: './franchise.css'
})
export class Franchise {
contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    console.log('Form Data:', this.contactForm.value);
    alert('Your message has been sent!');
    this.contactForm.reset();
    this.submitted = false;
  }

}
