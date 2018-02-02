import {Injectable} from "@angular/core";
import {DeliveryService} from "../../../services/delivery.service";
import {ProductDTO} from "../../../dto/products/ProductDTO";
import {Response} from '@angular/http';
/**
 * Created by Apple on 02.02.2018.
 */
@Injectable()
export class ProductsService {

  constructor(private delivery: DeliveryService) {
  }

  public addProduct(product: ProductDTO) {
    return this.delivery.post('/api/admin/add/product', product).map((response: Response) => {
      console.log(response)
      response.json();
    });
  }
}
