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

@Injectable()
export class CategoryService {

  constructor(private delivery: DeliveryService) {
  }

  public addCategory(category: CategoryDTO) {
    return this.delivery.post('/api/admin/add/category', category).map((response: Response) => response.json());
  }

  // public getCategories(): Observable<CategoryDTO[]> {
  //   return this.delivery.get('/api/category/findAll').map((response: Response) =>
  //     <CategoryDTO[]> DTOConverter.jsonArrayToCollection(DTOConverter.jsonToCategory, response.json()));
  // }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  //
  // public deleteSelectedCard(cardLink: string) {
  //   return this.delivery.delete(cardLink).map((response: Response) => console.log());
  // }
  //
  // public updateSelectedCard(cardLink: string, category: CategoryDTO) {
  //   return this.delivery.put(cardLink, card).map((response: Response) => console.log());
  // }
}
