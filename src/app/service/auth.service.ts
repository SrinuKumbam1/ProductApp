import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Signin } from '../model/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authURL = 'http://localhost:9090/product/api/auth'
  constructor(private http: HttpClient, private router: Router) { }

  login(signin:Signin) : Observable<any> {
    localStorage.setItem("username", signin.username);
    return this.http.post(this.authURL+'/signin', signin);
  }

  loadToken() {
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.clear();
    this.goToHome();
  }

  goToHome(){
    this.router.navigate(['/login']);
  }
}
