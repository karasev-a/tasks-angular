import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const roleId = jwt_decode(this.authService.token)['roleId'];
        if (roleId < 3) {
            return true;
        } else {
            console.error("Oops! You do not have sufficient permissions to access this page.");

            return false;
        }
    }
}
