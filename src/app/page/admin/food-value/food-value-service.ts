/**
 * Created by Apple on 02.02.2018.
 */
import {Injectable} from "@angular/core";
import {DeliveryService} from "../../../services/delivery.service";
import {Response} from '@angular/http';
import {FoodValueDTO} from "../../../dto/foodvalue/FoodValueDTO";
@Injectable()
export class FoodValueService {

  constructor(private delivery: DeliveryService) {
  }

  public addFoodValue(foodValue: FoodValueDTO) {
    return this.delivery.post('/api/admin/add/foodValue', foodValue).map((response: Response) => {
      response.json();
    });
  }
}
