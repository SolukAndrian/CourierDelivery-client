/**
 * Created by Apple on 30.01.2018.
 */
export class ProductDTO {
  public name: string;
  public price: number;
  public description: string;
  public weightProduct: number;
  public categoryId: number;


  constructor(name: string, price: number, description: string, weightProduct: number, categoryId: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.weightProduct = weightProduct;
    this.categoryId = categoryId;
  }
}
