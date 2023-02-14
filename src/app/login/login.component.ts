import { Component, OnInit } from '@angular/core';
import { NavigationCancellationCode, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { JwtResp } from '../JwtResp';
import { ProductService } from '../product.service';
import { Signin } from '../signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin : Signin = new Signin();
  resp : JwtResp = new JwtResp();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log("User name : "+this.signin.username+" Password : "+this.signin.password);
    this.productService.login(this.signin)
    .subscribe(
      data => {
        this.resp = data 
      console.log("Email "+this.resp.email)
      console.log("Token "+this.resp.token)
      console.log("Roles "+this.resp.roles)
      localStorage.setItem('response', JSON.stringify(this.resp));
      localStorage.setItem('token', this.resp.token);
    },
      error => console.log(error));
//    localStorage.setItem('response', JSON.stringify(this.resp));
//   console.log(JSON.stringify(this.resp.token));
    this.navigateTo('products');
  }
  navigateTo(url: string){
    this.router.navigate([url]);
  }
}

