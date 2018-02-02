/**
 * Created by Apple on 31.01.2018.
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DeliveryService} from "../../../services/delivery.service";
import {RouterModule} from "@angular/router";
import {FoodValueService} from "../food-value/food-value-service";
import {FoodValueModule} from "../food-value/food-value-module";
import {ProductsService} from "./product-service";
import {CreateProductComponent} from "./create-product/create-product.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    FoodValueModule,
    RouterModule.forRoot([
      {path: 'addProduct', component: CreateProductComponent}
    ])
  ],
  exports: [],
  declarations: [CreateProductComponent],
  providers: [ProductsService, ProductsService, DeliveryService, FoodValueService],
})

export class ProductModule {
}
