import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

   @Output() openBookNow = new EventEmitter<void>();
}
