import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @ViewChild('cardContainer') cardContainer!: ElementRef;
  private scrollInterval: any;

  services = [
    { title: 'Dry Cleaning', price: '99', unit: 'pc', description: 'Clothes dry clean with utmost care', image: '../../../assets/Images/icons/machine (2).png', link: "dryclean" },
    { title: 'Steam Iron', price: '19', unit: 'pc', description: 'Get your clothes steam iron per peice', image: '../../../assets/Images/icons/steam-iron (2).png', link: '' },
    { title: 'Shoes Laundry', price: '199', unit: 'pair', description: 'Get your dirty pair of shoes clean', image: '../../../assets/Images/icons/shoe (2).png', link: '' },
    { title: 'Wash & Fold', price: '69', unit: 'kg', description: 'Get your clothes Wash & Fold', image: '../../../assets/Images/icons/folded (2).png', link: '' },
    { title: 'Wash & Iron', price: '99', unit: 'kg', description: 'Get your clothes Wash & Iron ', image: '../../../assets/Images/icons/iron (2).png', link: '' },
    { title: 'Express Laundry', price: '199', unit: 'kg', description: 'Get your clothes Wash & Iron in 48 hours only', image: '../../../assets/Images/icons/express (2).png', link: '' },
  ];

  ngAfterViewInit() {
    this.autoScroll();
  }

  autoScroll() {
    const container = this.cardContainer.nativeElement;
    let scrollAmount = 0;
    const step = 2; // speed

    setInterval(() => {
      container.scrollLeft += step;
      scrollAmount += step;

      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 20); // interval speed
  }

}
