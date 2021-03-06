import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

import { AlertService } from '../alert/services/alert.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { Roles } from '../+user/models/roles';
import { IToken } from './models/token';
import { IPayloads } from './models/payload';

@Injectable()
export class AuthService {

    API_URL = 'http://localhost:8888';
    TOKEN_KEY = 'token';

    private _redirectUrl: string;
    get redirectUrl(): string {
        return this._redirectUrl;
    }
    set redirectUrl(url: string) {
        this._redirectUrl = url;
    }
    private loggedIn = new BehaviorSubject<boolean>(false);
    get isLoggedIn() {
        const time = new Date();
        if (this.token && this.payloads.exp > time.getTime() / 1000) { // #TODO: neede stronger check
            this.loggedIn.next(true);
        } else {
            localStorage.removeItem(this.TOKEN_KEY);
            this.loggedIn.next(false);
        }

        return this.loggedIn.asObservable();
    }

    constructor(private http: HttpClient, private router: Router, private alertService: AlertService) { }

    get token(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.loggedIn.next(false);
        this.router.navigateByUrl('/login');
    }

    public login(email: string, password: string) {
        const headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }),
        };

        const data = {
            email,
            password,
        };

        return this.http.post(`${this.API_URL}/login`, data, headers).subscribe(
            (res: IToken) => {
                localStorage.setItem(this.TOKEN_KEY, res.token);
                this.loggedIn.next(true);

                if (this._redirectUrl) {
                    this.router.navigateByUrl(this._redirectUrl);
                } else {
                    this.router.navigateByUrl('/categories');
                }
            },
            error => {
                this.alertService.error(error.error);
            },
        );
    }
    public get role(): number {
        return this.payloads.roleId;
    }

    private get payloads(): IPayloads {
        return jwt_decode(this.token);
    }
}
