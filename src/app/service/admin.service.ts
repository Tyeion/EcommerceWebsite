import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
  }),
  };

  constructor(private http:HttpClient) { }

  addAdmin(admin:Admin):Observable<Admin>{
    return this.http.post("http://localhost:8083/admin/newAdmin", admin);
  }

  validate(email:string,password:string){
    return this.http.get<Admin>("http://localhost:8083/admin/validating", {params: 
      new HttpParams().append("email", email).append("password",password)});
  }

}
