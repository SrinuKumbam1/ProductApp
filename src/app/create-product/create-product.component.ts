import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  submit: boolean = false;
  constructor(private productService: ProductService, private router: Router) { }

  product: Product = new Product();

  ngOnInit() {
  }

  saveProduct() {
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoProductList();
  }

  onSubmit() {
    this.saveProduct();
    this.submit = true;
  }

  gotoProductList() {
    this.router.navigate(['/products']);
  }

}
