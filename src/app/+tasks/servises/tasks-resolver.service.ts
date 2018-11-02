import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs/index';
import { mergeMap, take } from 'rxjs/operators';
import { ITask } from '../models/task';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { TasksService } from './tasks.service';

@Injectable()
export class TasksResolverService implements Resolve<ITask[]> {
    constructor(private router: Router, private ts: TasksService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<ITask[]> | Observable<never> {
        const id = route.paramMap.get('categoryId');
        let param = '';
        if (id) {
            param = `&categoryId=${id}`;
        }

        return this.ts.getAllTasks(param).pipe(
            take(1),
            mergeMap(tasks => {
              if (tasks) {
                return of(tasks);
              }
              // else { // id not found
              //   this.router.navigate(['/']); // #TODO: where I shoud to go?
              //   return EMPTY;
              // }
            }),
          );
    }
}
