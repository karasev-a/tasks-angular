import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs/index';
import { IUser } from '../../+user/models/user.model';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';

import { UserService } from '../../+user/models/services/user.service';

@Injectable()
export class UserResolverService implements Resolve<IUser> {
    constructor(private router: Router, private us: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<IUser> | Observable<never> {

        return this.us.getProfileData();
    }

}
