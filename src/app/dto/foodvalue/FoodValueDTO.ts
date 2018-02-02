/**
 * Created by Apple on 02.02.2018.
 */
export class FoodValueDTO {
  public proteins: number;
  public fats: number;
  public carbohydrates: number;
  public cal: number;
  public productId: number;

  constructor(proteins: number, fats: number, carbohydrates: number, cal: number, productId: number) {
    this.proteins = proteins;
    this.fats = fats;
    this.carbohydrates = carbohydrates;
    this.cal = cal;
    this.productId = productId;
  }
}
