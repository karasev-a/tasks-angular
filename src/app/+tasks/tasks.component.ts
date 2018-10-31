import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../+categories/services/categories.service';
import { ITask } from './models/task';
import { TasksService } from './servises/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.components.css'],
})

export class TasksComponent implements OnInit {
    private categories: ICategory[];
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
        // this._routeSubscription = this._route.params.subscribe(params => {
        //     this._categoryId = params.categoryId;
        // });
    }

    // public ngOnDestroy() {
    //     if (this._routeSubscription) {
    //         this._routeSubscription.unsubscribe();
    //     }
    // }
    // categoryClick(id: string) {
    //     this._route.data
    //         .subscribe((data: { tasks: ITask[] }) => {
    //             this.tasks = data.tasks;
    //         });
    // }
}
