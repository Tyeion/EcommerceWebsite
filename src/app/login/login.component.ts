import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  cust: Customer = new Customer();
  custid: string = '';
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private service: CustomerService, private router: Router) {}

  login() {
    console.log('I am in login');
    if (this.email === 'root' && this.password === 'root')
      this.router.navigate(['/products']);
    else {
      this.service
        .validate(this.email, this.password)
        .pipe(
          catchError((error) => {
            this.error = error.error.message;
            console.log(this.error);
            return of();
          })
        )
        .subscribe((data) => {
          localStorage.setItem('User', JSON.stringify(data));
          this.router.navigate(['/products']);
        });
    }
  }

  // admin = {
  //   adminemail: '',
  //   adminpassword: '',
  // };

  // login1() {
  //   if (
  //     this.admin.adminemail == 'admin@gmail.com' &&
  //     this.admin.adminpassword == 'admin123'
  //   ) {
  //     this.router.navigate(['./customers']);
  //   }
  // }
}
