import {Link} from "../link";
/**
 * Created by Apple on 30.01.2018.
 */
export class LinkCategoryDTO {
  public categoryId: number;
  public name: string;


  constructor(categoryId: number, name: string) {
    this.categoryId = categoryId;
    this.name = name;
  }
}
