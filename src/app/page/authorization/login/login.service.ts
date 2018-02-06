import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {LoginAccount} from "../../../dto/account/LoginAccount";
import {DeliveryService} from "../../../services/delivery.service";
import {EventEmitter, Injectable} from '@angular/core';

/**
 * Created by Apple on 05.02.2018.
 */
@Injectable()
export class LoginService {
  isAuthorizedChange: EventEmitter<boolean> = new EventEmitter();

  constructor(private delivery: DeliveryService) {
  }

  signIn(account: LoginAccount): Observable<Response> {
    return this.delivery.post('api/auth', account);
  }
  getStatus(): Observable<Response> {
    return this.delivery.get('api/status');
  }
  emitIsAuthorizedChangeEvent(boolean) {
    this.isAuthorizedChange.emit(boolean);
  }

}
