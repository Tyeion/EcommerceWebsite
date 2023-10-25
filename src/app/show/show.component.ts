import { Component, OnInit } from '@angular/core';

 

import { CustomerService } from '../service/customer.service';

 

import { Customer } from '../model/customer.model';

 

import { Router } from '@angular/router';

import { Product } from '../model/product.model';

import { ProductService } from '../service/product.service';

 

@Component({

  selector: 'app-show',

 

  templateUrl: './show.component.html',

 

  styleUrls: ['./show.component.css'],

})

export class ShowComponent implements OnInit {

  customers: Customer[] = [];

  products: Product[] = [];

 

  constructor(private productservice:ProductService,private service: CustomerService, private router: Router) {}

 

  ngOnInit(): void {

    this.service.listCustomer().subscribe((data) => {

      this.customers = data;

 

      console.log(this.customers);

 

      for (let i = 0; i < this.customers.length; i++) {

        console.log(this.customers[i]);

      }

    });

 

   this.productservice.getProducts().subscribe((data)=>{

    this.products = data ;

   })

 

 

 

  }

 

  removeCustomer(customerId: any) {

    console.log("I am in delete method")

    this.service.removeCustomer(customerId).subscribe(

      () => {

        this.customers = this.customers.filter(

 

          (customer) => customer.id !== customerId);

      },

      (error) => {

        console.error("Error deleting customer:", error);

    }

    );

  }

 

  redirectToAdd(){

    this.router.navigate(['/addproduct'])

  }

 

  deleteProduct(productId: any){

 

    this.productservice.deleteProduct(productId).subscribe(

      () => {

        this.products = this.products.filter((product) => product.id !== productId);

 

        console.log(productId,"delete working");

   

      },

      (error) => {

        console.error("Error removing item from cart:", error);

      }

    );

  }

 

  redirectToCus(){

    this.router.navigate(['/addcustomer'])

  }

 

}