import { HttpClient, HttpParams } from '@angular/common/http';
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

  login(signin:Signin) {
    localStorage.setItem("username", signin.username);
    return this.http.post(this.authURL+'/signin', signin);
  }
  getProduct(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.http.get(this.baseUrl+'/product', {params:queryParams});
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
    return this.http.delete(this.baseUrl+'/products', {params:queryParams});
  }

  getProductsList(): Observable<any> {
    return this.http.get(this.baseUrl+'/products');
  }
}
