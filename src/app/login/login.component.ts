import { Component, OnInit } from '@angular/core';
import { NavigationCancellationCode, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Signin } from '../signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin : Signin = new Signin(); 
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log("User name : "+this.signin.username+" Password : "+this.signin.password);
    this.productService.login(this.signin)
    .subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
      this.goToProducts();
  }

  goToProducts(){
    this.router.navigate(['/products']);
  }
}
