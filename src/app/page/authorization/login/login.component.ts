import {Component, OnInit, NgZone} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {LoginAccount} from "../../../dto/account/LoginAccount";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  success = false;
  error = false;
  wrongDetails = false;
  public user;
  verificationStat = false;
  account: LoginAccount;
  siteKey = environment.SITE_KEY;
  isDeleted = false;
  isInactive = false;
  mailIsSent = false;
  mailIsNotSent = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required]],
      username: ['', [Validators.required]],
    });
  }

  login = () => {
    this.success = false;
    this.error = false;
    this.wrongDetails = false;
    this.verificationStat = false;
    this.account = this.loginForm.value;
    this.loginService.signIn(this.account)
      .subscribe((response) => {
        this.getStatus();
      }, (error) => this.ngZone.run(() => {
        console.error(error.json());
      }));
  }

  private getStatus() {
    this.loginService.getStatus()
      .subscribe((response) => {
        sessionStorage.setItem('status', 'ACTIVE');
        this.success = true;
        this.loginService.emitIsAuthorizedChangeEvent(true);
        this.router.navigate(['main']);
      }, (error) => {
        console.error(error);
      });
  }
  validLogin(): boolean {
    return this.loginForm.valid;
  }
}
