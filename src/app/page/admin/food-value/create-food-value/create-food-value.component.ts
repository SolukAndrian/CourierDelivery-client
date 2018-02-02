import { Component, OnInit } from '@angular/core';
import {FoodValueDTO} from "../../../../dto/foodvalue/FoodValueDTO";
import {Router} from "@angular/router";
import {FoodValueService} from "../food-value-service";

@Component({
  selector: 'app-create-food-value',
  templateUrl: './create-food-value.component.html',
  styleUrls: ['./create-food-value.component.css']
})
export class CreateFoodValueComponent implements OnInit {

  public proteins: number;
  public fats: number;
  public carbohydrates: number;
  public cal: number;
  public productId: number;

  constructor(private foodValueService: FoodValueService, private router: Router) { }

  ngOnInit() {
  }

  addFoodValue() {
    this.foodValueService.addFoodValue(
      new FoodValueDTO(this.proteins, this.fats, this.carbohydrates, this.cal, this.productId))
      .subscribe(() => this.router.navigate(['/']));
  }
}
