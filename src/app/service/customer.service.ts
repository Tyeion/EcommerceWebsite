import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
  }),
  };


  constructor(private http:HttpClient ) { }

  addCustomer(c:Customer):Observable<Customer>{
    return this.http.post("http://localhost:8083/database/newCustomer", c);
  }

  removeCustomer(customerId: any): Observable<void> {
    console.log("customer id is "+ customerId)
    return this.http.delete<void>("http://localhost:8083/database/delete/" + customerId);
  }

 
  

  getCustomer(id:string){
    return this.http.get("http://localhost:8083/database/search"+id);
  }

  listCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:8083/database/all");
  }

  validate(email:string,password:string){
    return this.http.get<Customer>("http://localhost:8083/database/validate", {params: 
      new HttpParams().append("email", email).append("password",password)});
  }
}



