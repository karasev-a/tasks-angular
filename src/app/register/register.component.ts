import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { first } from 'rxjs/operators';

import { MyErrorStateMatcher } from '../error/error-state-matcher';
import { environment } from '../../environments/environment';
import { AlertService } from '../alert/services/alert.service';


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public matcher = new MyErrorStateMatcher();
  private _serverUrl: string;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private fb: FormBuilder,
    private alertService: AlertService) {
    this._serverUrl = environment.serverApiUrl;
  }

  public ngOnInit() {
    this.registerForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(255)]),
      passwords: this.fb.group({
        password: new FormControl("", [Validators.required]),
        confirmPassword: new FormControl("", [Validators.required]),
      }, {
          validator: this.checkPass

        }),
      phone: new FormControl("", [Validators.required]),
    });

  }
  public onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    let user = {
      firstName:"defName",
      lastName: "defLastName",
      roleId: '3',
      email: this.registerForm.value.email,
      password: this.registerForm.value.passwords.password,
      phone: this.registerForm.value.phone
    };


    this._http.post<IUser>(`${this._serverUrl}users`, user)
    .pipe(first())
    .subscribe(
        () => {
            // this._router.navigate(['/login']);
        },
        error => {
            this.alertService.error(error);
        });
  }

  private checkPass(formGroupPass: FormGroup) {
    const password = formGroupPass.controls.password.value
    const confirmPassword = formGroupPass.controls.confirmPassword.value;
    return (password !== confirmPassword) ? { matchPassword: true } : null;
  }

}
