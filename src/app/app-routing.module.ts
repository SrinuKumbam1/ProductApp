import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ReadProductComponent } from './component/read-product/read-product.component';
import { ShowProductsComponent } from './component/show-products/show-products.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ShowProductsComponent },
  { path: 'add', component: CreateProductComponent },
  { path: 'update', component: UpdateProductComponent },
  { path: 'details/:id', component: ReadProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
