
import { Component } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  c: Customer = new Customer();
    id?:any;
   username?: string;

  email?: string;

  password?: string;

  mobileNo?: string;
  

  constructor(private service: CustomerService, private router: Router) {}

  // save() {
  // this.service.addCustomer(this.c)
  // console.log(this.c);
  // this.router.navigate(['/login']);

  // }

  save() {
    this.service.addCustomer(this.c).subscribe(() => {
      alert("Customer added successfully");
    console.log('Customer added successfully');
    this.router.navigate(['/login']);
    });
  }

 
}
