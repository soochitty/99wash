import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: false,
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css'
})
export class Testimonial {

   services = [
      { title: 'Dry Cleaning', description: 'Clothes dry clean with utmost care' ,image:'../../../assets/Images/icons/wash.png'},
      { title: 'Shoes Laundry', description: 'Get your dirty pair of shoes clean' ,image:'../../../assets/Images/icons/shoe.png'},
      { title: 'Laundry Per KG', description: 'We charge as per weight of your clothes' ,image:'../../../assets/Images/icons/heavy.png'},
      { title: 'Steam Iron', description: 'Get your clothes steam iron per peice' ,image:'../../../assets/Images/icons/steam-iron.png'},
      { title: 'Express Laundry', description: 'Get your clothes Wash & Iron in 48 hours only' ,image:'../../../assets/Images/icons/express.png'},
    ];
}
