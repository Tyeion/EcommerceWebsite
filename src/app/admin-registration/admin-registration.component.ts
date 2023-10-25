import { CustomerService } from './../service/customer.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Admin } from '../model/admin.model';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})


export class AdminRegistrationComponent {
  admin: Admin = new Admin();
  id?:any;
  username?: string;
  email?: string;
  password?: string;
  mobileNo?: string;


constructor(private service: AdminService, private router: Router) {}


Adminsave() {
  this.service.addAdmin(this.admin).subscribe(() => {
    alert("Admin added successfully");
  console.log("Admin added successfully");
  this.router.navigate(['/adminlogin']);
  });
}
}
