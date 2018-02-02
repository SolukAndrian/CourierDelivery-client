/**
 * Created by Apple on 30.01.2018.
 */
import {Link} from '../link';

export class LinkProductDTO {
  public productId: number;
  public name: string;
  public description: string;
  public price: string;
  public weight: number;
  public categoryId: number;
  public self: Link;


  constructor(productId: number, name: string, description: string, price: string, weight: number, categoryId: number, self: Link) {
    this.productId = productId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.weight = weight;
    this.categoryId = categoryId;
    this.self = self;
  }
}
