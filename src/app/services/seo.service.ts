import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  updateTags(config: { title: string, description: string }) {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    // This tag is huge for social media shares in WhatsApp groups!
    this.meta.updateTag({ property: 'og:title', content: config.title });
  }
}