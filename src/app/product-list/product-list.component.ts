// product-list.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() viewMode = false;
  
  products: Product[] = [];
  cart: Product[] = [];
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService ,
    private router:Router
  ) {}

  ngOnInit():void {

    this.productService.getProducts().subscribe((data=>{
      this.products=data
      console.log(this.products);
      for(let i =0; i < this.products.length; i++){
        console.log(this.products[i]);
      }
    }))
  }



  addToCart(cart: Cart) {

    this.cartService.addToCart(cart).subscribe(
      (resp: Cart) => {
        console.log('Product added to cart:', resp);
    
        this.router.navigate(['./cart']);
  
      },
  
      (error) => {
  
        console.error('Error adding product to cart:', error);
  
      }

    );
  }
 

  
  
}
