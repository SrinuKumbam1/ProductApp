import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    if(httpRequest.url.includes(this.authService.authURL)){
      return httpHandler.handle(httpRequest);
    }
    else{
      const token = this.authService.loadToken();
      const request = httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}`}})
      return httpHandler.handle(request);
    }
  }
}
