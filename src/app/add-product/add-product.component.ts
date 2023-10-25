
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../service/product.service';

import { Router } from '@angular/router';

import { Product } from '../model/product.model';

 

@Component({

  selector: 'app-add-product',

  templateUrl: './add-product.component.html',

  styleUrls: ['./add-product.component.css']

})

export class AddProductComponent {

  newProduct: Product =  new Product();

  constructor(private productService: ProductService) {}

  onSubmit() {

    this.productService.addProduct(this.newProduct).subscribe(() => {
      alert("Product Added!");
      console.log('Product added successfully');

    });

  }



}