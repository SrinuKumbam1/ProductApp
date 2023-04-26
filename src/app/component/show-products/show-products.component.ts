import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products: Observable<Product[]>;  
  public validToken : string;
  constructor(private productService: ProductService, private router: Router) {  }

  ngOnInit() {
    this.fetchProductList();
  }

  fetchProductList() {
    console.log(localStorage.getItem('response'));
    this.products = this.productService.getProductsList();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.fetchProductList();
        },
        error => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateProduct(product: Product){
    this.router.navigate(['update', product]);
  }
}
