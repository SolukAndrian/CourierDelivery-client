import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../product-service";
import {ProductDTO} from "../../../../dto/products/ProductDTO";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public name: string;
  public description: string;
  public price: number;
  public weightProduct: number;
  public categoryId: number;

  constructor(private manageProduct: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.manageProduct.addProduct(
      new ProductDTO(this.name, this.price, this.description, this.weightProduct, this.categoryId))
      .subscribe(() => this.router.navigate(['/addFoodValue']));
  }
}
