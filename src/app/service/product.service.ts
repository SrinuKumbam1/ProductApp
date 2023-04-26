import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signin } from '../model/signin';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
private baseUrl = 'http://localhost:9090/product/productapi';
  
constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.http.get(this.baseUrl+'/product?id='+id)
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'/products', product);
  }

  updateProduct(product: Object): Observable<Object> {
    return this.http.put(this.baseUrl+'/products', product);
  }

  deleteProduct(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
  
    return this.http.delete(this.baseUrl+'/products?id='+id);
  }

  getProductsList(): Observable<any> {
    /*    const headers_object = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        });

        const httpOptions = {
          headers: headers_object
        }; */
  //  return this.http.get(this.baseUrl+'/products', httpOptions);
      return this.http.get(this.baseUrl+'/products');
  }
}
