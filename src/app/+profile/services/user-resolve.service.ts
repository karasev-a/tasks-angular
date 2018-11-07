import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs/index';
import { mergeMap, take } from 'rxjs/operators';
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
        return this.us.getUser().pipe(
            take(1),
            mergeMap(tasks => {
                if (tasks) {
                    return of(tasks);
                }
            }),
        );
    }

}
