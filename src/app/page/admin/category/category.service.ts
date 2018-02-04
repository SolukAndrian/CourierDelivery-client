/**
 * Created by Apple on 02.02.2018.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from '../../../dto/dto.converter';
import {DeliveryService} from "../../../services/delivery.service";
import {CategoryDTO} from "../../../dto/category/CategoryDTO";
import {LinkCategoryDTO} from "../../../dto/category/LinkCategoryDTO";

@Injectable()
export class CategoryService {

  constructor(private delivery: DeliveryService) {
  }

  public addCategory(category: CategoryDTO) {
    return this.delivery.post('/api/admin/add/category', category).map((response: Response) => response.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  public deleteCategory(categoryId: number) {
    return this.delivery.delete('/api/admin/delete/category/'+categoryId).map((response: Response) => console.log());
  }

  getCategories(): Observable<LinkCategoryDTO[]> {
    return this.delivery.get('/api/category/findAll')
      .map((response: Response) => <LinkCategoryDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToLinkCategory, response.json()))
      .catch(this.handleError);
  }

  editCategory(categoryId: number, category: CategoryDTO){
    return this.delivery.put('/api/admin/update/category/' + categoryId, category)
      .map((response: Response) => response.json());
  }
}
