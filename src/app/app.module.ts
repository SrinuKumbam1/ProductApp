import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ReadProductComponent } from './component/read-product/read-product.component';
import { ShowProductsComponent } from './component/show-products/show-products.component';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateProductComponent,
    ShowProductsComponent,
    CreateProductComponent,
    LoginComponent,
    ReadProductComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ProductService , {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
