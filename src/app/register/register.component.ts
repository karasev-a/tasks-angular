import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material'

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    public passwordForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder) {
        this._createForm();
    }

    ngOnInit() {
    }
    login(): void {

    }


    private _createForm() {
        this.passwordForm = this.fb.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
          }, {
            validator: this._matchPassword
          });

        this.registerForm = this.fb.group({
            email: new FormControl(``, [Validators.required, Validators.email, Validators.maxLength(255)]),
            passwordForm: this.passwordForm,
            phone: new FormControl('', [Validators.required]),
        })
    }


    private _matchPassword(AC: AbstractControl): any {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
         if(password != confirmPassword) {
             console.log('false');
             AC.get('confirmPassword').setErrors( {MatchPassword: true} )
         } else {
             console.log('true');
             return null
         }
     }

}
