import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Admin } from '../model/admin.model';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  
  cust: Admin = new Admin();
  custid: string = '';
  email: string = '';
  password: string = '';
  error: string = '';



constructor (private router:Router, private service:AdminService){}



login() {
  console.log('I am in Admin login');
  if (this.email === 'root' && this.password === 'root')
    this.router.navigate(['/customers']);
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
        // localStorage.setItem('User', JSON.stringify(data));
        this.router.navigate(['/customers']);
      });
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
}
