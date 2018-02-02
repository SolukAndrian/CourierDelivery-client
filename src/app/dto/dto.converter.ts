import {CategoryDTO} from "./category/CategoryDTO";
import {Link} from "./link";
import {LinkCategoryDTO} from "./category/LinkCategoryDTO";
import {ProductDTO} from "./products/ProductDTO";
/**
 * Created by Apple on 20.01.2018.
 */
export class DTOConverter {

  public static jsonToCategory(data: any): CategoryDTO {
    return new CategoryDTO(data.name);
  }

  public static jsonToProducts(data: any): ProductDTO {
    return new ProductDTO(data.name, data.price, data.description, data.weightProduct, data.categoryId);
  }
  public static jsonToLinkCategory(data: any): LinkCategoryDTO {
    const self: Link = DTOConverter.jsonToLink('self', data._links.self);
    return new LinkCategoryDTO(data.name, self);
  }

  public static jsonToLink(rel: string, data: any): Link {
    return new Link(rel, data.href);
  }

  public static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any> {
    const array: Array<any> = [];
    data.forEach(element => {
      array.push(callback(element));
    });
    return array;
  }
}
