import { Injectable } from '@angular/core';

import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { TasksService } from '../servises/tasks.service';
import { ITask } from '../models/task';

@Injectable({
    providedIn: 'root',
})

export class TaskEditResolverService implements Resolve<ITask> {

    constructor(private _tasksService: TasksService, private _router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ITask | Observable<ITask> | Promise<ITask> {
        const id = +route.params.taskId;

        return this._tasksService.getTask(id);
    }

}
