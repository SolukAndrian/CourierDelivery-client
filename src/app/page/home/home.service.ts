/**
 * Created by Apple on 30.01.2018.
 */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from '../../dto/dto.converter';
import {NGXLogger} from 'ngx-logger';
import {DeliveryService} from "../../services/delivery.service";
import {LinkCategoryDTO} from "../../dto/category/LinkCategoryDTO";
import {LinkProductDTO} from "../../dto/products/LinkProductDTO";
import {CategoryDTO} from "../../dto/category/CategoryDTO";
import {ProductDTO} from "../../dto/products/ProductDTO";

@Injectable()
export class HomeService {

  constructor(private delivery: DeliveryService) {
  }

  getCategories(): Observable<LinkCategoryDTO[]> {
    return this.delivery.get('/api/category/findAll')
      .map((response: Response) => <LinkCategoryDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToCategory, response.json()))
      .catch(this.handleError);
  }

  getProducts(): Observable<ProductDTO[]> {
    return this.delivery.get('/api/product/findAll')
      .map((response: Response) => <ProductDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToProducts, response.json()))
      .catch(this.handleError);
  }
  // getProducts(): Observable<CourseLink[]> {
  //   return this.orlp.get('api/course/top/')
  //     .map((response: Response) => <CourseLink[]> DTOConverter
  //       .jsonArrayToCollection(DTOConverter.jsonToPublicLinkCourse, response.json()))
  //     .catch(this.handleError);
  // }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
