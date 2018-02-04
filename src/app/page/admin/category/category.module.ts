/**
 * Created by Apple on 21.01.2018.
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DeliveryService} from "../../../services/delivery.service";
import {RouterModule} from "@angular/router";
import {CategoryService} from "./category.service";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {ManageCategoryComponent} from "./manage-category/manage-category.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'addCategory', component: CreateCategoryComponent},
      {path: 'manageCategory', component: ManageCategoryComponent}
    ])
  ],
  exports: [],
  declarations: [CreateCategoryComponent, ManageCategoryComponent],
  providers: [CategoryService, DeliveryService],
})

export class CategoryModule {
}
