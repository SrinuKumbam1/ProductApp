import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signin } from './signin';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
private baseUrl = 'http://localhost:9090/product/productapi';
private authURL = 'http://localhost:9090/product/api/auth'
  
constructor(private http: HttpClient) { }

  login(signin:Signin) : Observable<any> {
    localStorage.setItem("username", signin.username);
    return this.http.post(this.authURL+'/signin', signin);
  }
  getProduct(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);

    const headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    const httpOptions = {
      headers: headers_object
    };

  //  return this.http.get(this.baseUrl+'/product', {params:queryParams}, httpOptions);
    return this.http.get(this.baseUrl+'/product?id='+id, httpOptions);
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
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    const httpOptions = {
      headers: headers_object
    };
    return this.http.delete(this.baseUrl+'/products?id='+id, httpOptions);
  }

  getProductsList(): Observable<any> {
        const headers_object = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        });

        const httpOptions = {
          headers: headers_object
        };
    return this.http.get(this.baseUrl+'/products', httpOptions);
  }
}
