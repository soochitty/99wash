import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
services = [
  { icon: 'bi bi-iron', title: 'Steam Iron', price: 'Starts @ ₹29/per pc' },
  { icon: 'bi bi-basket', title: 'Wash & Fold', price: '₹99/Kg' },
  { icon: 'bi bi-iron', title: 'Wash & Iron', price: '₹149/Kg' },
  { icon: 'bi bi-iron', title: 'Shoe Laundry', price: 'Starts @ ₹299' }
];

mensClothes = [
  { name: 'Shirts', price: '₹99 / ₹29' },
  { name: 'Premium Shirts', price: '₹149 / ₹49' },
  { name: 'T-Shirts', price: '₹99 / ₹29' },
  { name: 'Pants', price: '₹99 / ₹29' },
  { name: 'Joggers', price: '₹99 / ₹29' },
  { name: 'Jeans', price: '₹99 / ₹29' },
  { name: 'Shorts', price: '₹99 / ₹29' },
  { name: 'Kurta', price: '₹99 / ₹49' },
  { name: 'Designer Kurta', price: '₹149 / ₹49' },
  { name: 'Lungis/Dhotis', price: '₹99 / ₹29' },
  { name: 'Sweatshirt', price: '₹149 / ₹49' },
  { name: 'Hoodie', price: '₹149 / ₹49' },
  { name: 'Waistcoat', price: '₹149 / ₹49' },
  { name: 'Sweater', price: '₹149 / ₹49' },
  { name: 'Jacket', price: '₹199 / ₹49' },
  { name: 'Blazer', price: '₹199 / ₹99' },
  { name: 'Sherwani', price: '₹299 / ₹99' },
  { name: 'Designer Sherwani', price: '₹399 / ₹99' },
  { name: 'Winter Jacket', price: '₹199 / ₹49' },
  { name: 'Leather Jacket', price: '₹399' },
  { name: 'Kids Wear', price: '₹99 / ₹29' },
  { name: 'Tie', price: '₹99 / ₹29' },
  { name: 'Mufflers', price: '₹99 / ₹29' },
  { name: 'Cap', price: '₹99' },
  { name: 'Hand Gloves', price: '₹99 / ₹29' }
];


womensClothes  = [
  { name: 'Shirts/T-shirts/Blouses', price: '₹99 / ₹29' },
  { name: 'Designer Blouses', price: '₹149 / ₹49' },
  { name: 'Trousers', price: '₹99 / ₹29' },
  { name: 'Legging', price: '₹99 / ₹29' },
  { name: 'Jeans', price: '₹99 / ₹29' },
  { name: 'Pyjama', price: '₹99 / ₹29' },
  { name: 'Kurta Plain', price: '₹99 / ₹39' },
  { name: 'Kurta Heavy', price: '₹199 / ₹49' },
  { name: 'Designer Kurta', price: '₹149 / ₹49' },
  { name: 'Shorts/Skirts', price: '₹99 / ₹29' },
  { name: 'Long Skirts', price: '₹149 / ₹39' },
  { name: 'Palazo', price: '₹99 / ₹39' },
  { name: 'Shrug', price: '₹149 / ₹39' },
  { name: 'Patticoat', price: '₹99 / ₹39' },
  { name: 'Dupatta', price: '₹99 / ₹29' },
  { name: 'Dupatta Heavy', price: '₹149 / ₹39' },
  { name: 'Scarf', price: '₹99 / ₹29' },
  { name: 'Shawl', price: '₹199 / ₹49' },
  { name: 'Night Gowns', price: '₹99 / ₹49' },
  { name: 'Designer Gowns', price: '₹399 / ₹99' },
  { name: 'One Piece', price: '₹99 / ₹49' },
  { name: 'Sweater', price: '₹99 / ₹49' },
  { name: 'Hoodies', price: '₹149 / ₹49' },
  { name: 'Jumpsuit', price: '₹199 / ₹49' },
  { name: 'Blazer', price: '₹199 / ₹99' },
  { name: 'Leather Pant', price: '₹199 ' },
  { name: 'Overcoat', price: '₹299 / ₹99' },
  { name: 'Saree', price: '₹199 / ₹99' },
  { name: 'Designer Saree', price: '₹299 / ₹149' },
  { name: 'Gaghra', price: '₹299 / ₹149' },
  { name: 'Designer Gaghra', price: '₹399 / ₹199' },
  { name: 'Anarkali', price: '₹199 / ₹99' },
  { name: 'Designer Anarkali', price: '₹299 / ₹149' },
  { name: 'Vest', price: '₹49 / ₹29' }
];


houseHold  = [
  { name: 'Napkin/Handtowel', price: '₹49' },
  { name: 'Pillow Cover', price: '₹49' },
  { name: 'Cusion Cover', price: '₹49' },
  { name: 'Doormat', price: '₹99' },
  { name: 'Bath Towel', price: '₹149' },
  { name: 'Hand Gloves', price: '₹99' },
  { name: 'Cap', price: '₹99' },
  { name: 'Bathrobe', price: '₹149' },
  { name: 'Single Bedsheet', price: '₹149' },
  { name: 'Double Bedsheet', price: '₹199' },
  { name: 'Blanket/Quilt Single', price: '₹299' },
  { name: 'Blanket/Quilt Double', price: '₹399' },
  { name: 'Soft Toys (small)', price: '₹99' },
  { name: 'Soft Toys (medium)', price: '₹199' },
  { name: 'Soft Toys (large)', price: '₹299' },
  { name: 'Soft Toys (extra large)', price: '₹499' },
  { name: 'Bed Cover Single', price: '₹199' },
  { name: 'Bed Cover Double', price: '₹299' },
  { name: 'Pillow', price: '₹199' },
  { name: 'Cushion (small)', price: '₹199' },
  { name: 'Cushion (medium)', price: '₹299' },
  { name: 'Cushion (large)', price: '₹399' }
];

footwear = [
  { name: 'Flipflops / Sandals', price: '₹199' },
  { name: 'Sports Shoes', price: '₹299' },
  { name: 'Leather Shoes', price: '₹499' },
  { name: 'Premium Sneakers', price: '₹399' },
  { name: 'Boots', price: '₹499' },
   { name: 'Kids Shoes', price: '₹199' }
];


}
