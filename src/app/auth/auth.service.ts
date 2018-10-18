import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AlertService } from '../alert/services/alert.service';

@Injectable()
export class AuthService {

    API_URL = 'http://localhost:8888';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient, private router: Router,private alertService: AlertService) { }

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    public logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigateByUrl('/');
    }

    public login(email: string, pass: string) {
        const headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
        };

        const data = {
            email: email,
            password: pass
        };

        return this.http.post(`${this.API_URL}/login`, data, headers).subscribe(
            (res: any) => {
                localStorage.setItem(this.TOKEN_KEY, res.token);
                
                // this.router.navigateByUrl('/tasks');
            },
            error => {
                this.alertService.error(error);
            }
        );
    }

    // getAccount() {
    //     return this.http.get(this.API_URL + '/account');
    // }
}
