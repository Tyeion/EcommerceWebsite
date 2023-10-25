import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: any[] = [];
  constructor(private cartService: CartService){
    this.cartService.list().subscribe((data) => (this.cart = data));
      
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id).subscribe(
      () => {
        console.log("delete working");
        this.cart = this.cart.filter(product => product.id !== id);
      },
      (error) => {
        console.error("Error removing item from cart:", error);
      }
    );
  }
  
}

