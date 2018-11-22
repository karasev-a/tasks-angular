import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Location } from '@angular/common';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class PrivilegedGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private _location: Location) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const accessRoles = next.data.roles;
        const currentRole = this.authService.role;
        if (accessRoles.indexOf(currentRole) !== -1) {
            return true;
        } else {
            console.error("Oops! You do not have sufficient permissions to access this page.");
            // this.router.navigate([next.]);
            this._location.back();

            return false;
        }
    }
}
