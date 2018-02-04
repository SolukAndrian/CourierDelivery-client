import {Component, OnInit} from '@angular/core';
import {LinkCategoryDTO} from "../../dto/category/LinkCategoryDTO";
import {HomeService} from "./home.service";
import {CategoryDTO} from "../../dto/category/CategoryDTO";
import {ProductDTO} from "../../dto/products/ProductDTO";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories: CategoryDTO[] = [];
  public products: ProductDTO[] = [];
  errorMessage: string;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getCategories()
      .subscribe(categories => this.categories = categories)
    error => this.errorMessage = <any>error
    this.homeService.getProducts()
      .subscribe(products => this.products = products)
    error => this.errorMessage = <any>error

  }

}
