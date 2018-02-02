import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from "@angular/http";
import {DeliveryService} from "./services/delivery.service";
import {HeaderService} from "./page/main/header/header.service";
import {HeaderComponent} from "./page/main/header/header.component";
import {CategoryModule} from "./page/admin/category/category.module";
import {HomeModule} from "./page/home/home.module";
import {ProductModule} from "./page/admin/product/products.module";
import {CategoryService} from "./page/admin/category/category.service";
import {ProductsService} from "./page/admin/product/product-service";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    CategoryModule,
    ProductModule,
    HomeModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])],
  providers: [CategoryService, ProductsService, DeliveryService, HeaderService],
  bootstrap: [HeaderComponent]
})
export class AppModule {  }
