import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { AuthService } from '../auth/auth.service';
import { AlertService } from '../alert/services/alert.service';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private _authService: AuthService) { }

    public ngOnInit() {
        this.loginForm = this.fb.group({
            email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(255)]),
            password: new FormControl("", [Validators.required, Validators.maxLength(255)]),
        });
    }

    public onSubmit() {
        const loginData = this.loginForm.value;

        if (loginData.email && loginData.password) {
            this._authService.login(loginData.email, loginData.password);
        }
    }
}
