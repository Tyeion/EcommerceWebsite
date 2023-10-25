import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
public baseUrl="http://localhost:8080/capstone"

  constructor(private http:HttpClient) { }
  
  getProducts():Observable<any>{
      return this.http.get(this.baseUrl+"/all")
  }

  getProductById():Observable<any>{
    return this.http.get(this.baseUrl+"/search/{id}")
}

getProductByName():Observable<any>{
  return this.http.get(this.baseUrl+"/search")
}


addProduct(product: any): Observable<any> {
 
  return this.http.post(this.baseUrl+"/add", product);
}

deleteProduct(id: number): Observable<any> {
  return this.http.delete(this.baseUrl+"/delete/"+id);
}
  
updateProduct(product: any): Observable<any> {
  return this.http.put(this.baseUrl+"/{id}", product);
}

removeProduct(id: number): Observable<any> {
  return this.http.delete(this.baseUrl + `/delete/${id}`);
}
}
