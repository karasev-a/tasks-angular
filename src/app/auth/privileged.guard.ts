import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Location } from '@angular/common';
import { AlertService } from '../alert/services/alert.service';

@Injectable()
export class PrivilegedGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private _location: Location, private alertService: AlertService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const accessRoles = next.data.roles;
        const currentRole = this.authService.role;
        if (accessRoles.indexOf(currentRole) !== -1) {
            return true;
        } else {
            this.alertService.error('Oops! You do not have sufficient permissions to access this page.');
            this._location.back();

            return false;
        }
    }
}
