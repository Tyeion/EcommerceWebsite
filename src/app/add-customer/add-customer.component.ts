import { Component } from '@angular/core';

import { Customer } from '../model/customer.model';

import { CustomerService } from '../service/customer.service';

 

@Component({

  selector: 'app-add-customer',

  templateUrl: './add-customer.component.html',

  styleUrls: ['./add-customer.component.css']

})

 

export class AddCustomerComponent {

 

 newCustomer: Customer = new Customer();

 constructor(private customerService: CustomerService) {}

  onSubmit() {

    this.customerService.addCustomer(this.newCustomer).subscribe(() => {

      alert("Customer added successfully");

    console.log('Customer added successfully');

    });

  }

}