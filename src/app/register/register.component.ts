import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = this.fb.group({
    email: new FormControl("", [ Validators.required, Validators.email, Validators.maxLength(255)]),
    passwords: this.fb.group({
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
    }, {
        validator: this._matchPassword,
      }),
    phone: new FormControl("", [Validators.required]),
  });

  constructor(private router: Router, private fb: FormBuilder) {

  }

  public ngOnInit() {
  }
  public login(): void {

  }

  private _matchPassword(AC: AbstractControl): any {
    const password = AC.get("password").value; // to get value in input tag
    const confirmPassword = AC.get("confirmPassword").value; // to get value in input tag
    if (password !== confirmPassword) {
      console.log("false");
      AC.get("confirmPassword").setErrors({ MatchPassword: true });
    } else {
      console.log("true");
      return null;
    }
  }
}
