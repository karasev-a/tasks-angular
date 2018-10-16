import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { MyErrorStateMatcher } from '../error/error-state-matcher';



@Component({
  selector: "app-login",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})

export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  public registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {

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
  public login(): void {

  }

  private checkPass(formGroupPass: FormGroup) {
    const password = formGroupPass.controls.password.value
    const confirmPassword = formGroupPass.controls.confirmPassword.value;
    return (password !== confirmPassword) ? { matchPassword: true } : null;
  }

}
