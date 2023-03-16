import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from '../service/product.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private productService: ProductService) {}

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if(httpRequest.url.includes(this.productService.authURL)){
      return httpHandler.handle(httpRequest);
    }
    else{
      const token = this.productService.loadToken();
      const request = httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}`}})
      return httpHandler.handle(request);
    }
  }
}
