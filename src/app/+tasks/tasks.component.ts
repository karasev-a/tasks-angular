import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../+categories/services/categories.service';
import { ITask } from './models/task';
import { TasksService } from './servises/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/index';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.components.css'],
})

export class TasksComponent implements OnInit {
    private categories: ICategory[];
    private taskOffset = 10;
    private tasks: ITask[];
    private _routeSubscription: Subscription;
    private _categoryId: number;
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService, private _route: ActivatedRoute) { }

    ngOnInit() {
        // get all categories for nav bar
        this.categoriesService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });
        this._route.data
            .subscribe((data: { tasks: ITask[] }) => {
                this.tasks = data.tasks;
            });
    }

    onAccept(taskId: string) {
        this.tasksService.subscribeToTask(taskId).subscribe();
    }

    onScroll() {
        // get current category id
        this._routeSubscription = this._route.params.subscribe(currentParams => {
            this._categoryId = parseInt(currentParams.categoryId, 10);
        });

        const paramsObj = {
            offset: this.taskOffset.toString(),
        };
        if (this._categoryId) {
            Object.assign(paramsObj, {categoryId: this._categoryId.toString});
        }

        this.tasksService.getAllTasks(paramsObj).subscribe( (tasks: ITask[]) => {
            this.tasks = this.tasks.concat(tasks);
        });
        this.taskOffset += 10;
    }
}
