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

    onScroll() {
        // get current category id
        this._routeSubscription = this._route.params.subscribe(currentParams => {
            this._categoryId = parseInt(currentParams.categoryId, 10);
        });

        let params = `&offset=${this.taskOffset}`;
        if (this._categoryId) {
            params += `&categoryId=${this._categoryId}`;
        }

        this.tasksService.getAllTasks(params).subscribe(tasks => {
            this.tasks = this.tasks.concat(tasks);
        });
        this.taskOffset += 10;
    }
}
