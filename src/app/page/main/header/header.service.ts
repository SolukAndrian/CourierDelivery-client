/**
 * Created by Apple on 29.01.2018.
 */
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {DTOConverter} from '../../../dto/dto.converter';
import {NGXLogger} from 'ngx-logger';
import {DeliveryService} from "../../../services/delivery.service";

@Injectable()
export class HeaderService {
  constructor(private delivery: DeliveryService) {
  }

  // getUserDetails(): Observable<UserDetailsDto> {
  //   return this.orlp.get('api/private/user/details')
  //     .map((response: Response) => <UserDetailsDto> DTOConverter.jsonToUserDetails(response.json()))
  //     .catch(this.handleError);
  // }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
