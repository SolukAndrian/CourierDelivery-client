import {Link} from "../link";
/**
 * Created by Apple on 30.01.2018.
 */
export class LinkCategoryDTO {
  public name: string;
  public self: Link;


  constructor(name: string, self: Link) {
    this.name = name;
    this.self = self;
  }
}
