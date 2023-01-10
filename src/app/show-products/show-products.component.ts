import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    localStorage.setItem("token", "Bearer token");
    this.fetchProductList();
  }

  fetchProductList() {
    this.products = this.productService.getProductsList();
    console.log(localStorage.getItem("token"));
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
