import { Component, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('99washAngularProject');
constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
    // 1. The Title is what shows up in Google Search results
    this.titleService.setTitle('99Wash | Best Laundry & Dry Cleaners in Ulwe, Navi Mumbai');

    // 2. The Description is the snippet below the title in Google
    this.metaService.addTags([
      { name: 'description', content: 'Premium laundry and dry cleaning services in Ulwe, Navi Mumbai. Free doorstep pickup and delivery. Best rates for wash and iron!' },
      { name: 'keywords', content: 'laundry in ulwe, dry cleaners navi mumbai, 99wash ulwe, wash and iron near me' },
      { name: 'robots', content: 'index, follow' } // Tells Google to list this page
    ]);
  }
}
