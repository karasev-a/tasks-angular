import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup = new FormGroup({
        email: new FormControl(``, [Validators.required, Validators.email, Validators.maxLength(255)]),
        password: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      });
    constructor(private router: Router) { }

    ngOnInit() {
    }
    
    login(): void {
        
    }
}
