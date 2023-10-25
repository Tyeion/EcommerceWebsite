import { Injectable } from '@angular/core';

import { Product } from '../model/product.model';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Cart } from '../model/cart.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  
httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Cart[]>('http://localhost:8083/Cart/items');
  }

 
  addToCart(cart: Cart): Observable<Cart> {

    return this.http.post<Cart>("http://localhost:8083/Cart/add", cart, this.httpOptions)

      .pipe(catchError(this.handleError));

  }

 

 

  // Remove a product from the cart and update the back-end

  removeFromCart(cartId: number) {
    return this.http.delete("http://localhost:8083/Cart/remove/" + cartId);
  }
  
  
handleError(error: HttpErrorResponse) {
    return throwError(error);

  }

 

  errorHandler(error: { error: { message: string; }; status:

    any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;

     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);

  }

}



