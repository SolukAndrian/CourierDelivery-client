import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginService} from './login.service';
import {LoginComponent} from './login.component';
import {Angular2SocialLoginModule} from 'angular2-social-login';
/**
 * Created by Apple on 05.02.2018.
 */
@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Angular2SocialLoginModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
    ]),
  ],
  exports: [],
  declarations: [
    LoginComponent
  ],
  providers: [LoginService],
})
export class LoginModule {
  constructor() { }
}
