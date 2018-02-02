/**
 * Created by Apple on 02.02.2018.
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DeliveryService} from "../../../services/delivery.service";
import {RouterModule} from "@angular/router";
import {FoodValueService} from "./food-value-service";
import {CreateFoodValueComponent} from "./create-food-value/create-food-value.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'addFoodValue', component: CreateFoodValueComponent}
    ])
  ],
  exports: [],
  declarations: [CreateFoodValueComponent],
  providers: [FoodValueService, DeliveryService],
})

export class FoodValueModule {
}
