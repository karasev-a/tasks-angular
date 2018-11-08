import { Injectable } from '@angular/core';

import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { CategoriesService } from './categories.service';
import { ICategory } from '../models/category';

@Injectable({
    providedIn: 'root',
})

export class CategoriesListResolverService implements Resolve<ICategory[]> {

    constructor(private _categoriesService: CategoriesService, private _router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICategory[] | Observable<ICategory[]> | Promise<ICategory[]> {
        const id = +route.params.taskId;

        return this._categoriesService.getAllCategories();
    }

}
