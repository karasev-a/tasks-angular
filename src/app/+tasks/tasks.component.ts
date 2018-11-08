import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../+categories/services/categories.service';
import { ITask } from './models/task';
import { TasksService } from './servises/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/index';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { MatDialog } from '@angular/material/dialog';
import { AcceptDialogComponent } from '../dialogs/accept/accept-dialog.component';
import { ICategory } from '../+categories/models/category';

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
    private _categoryParam = {};

    constructor(
        private categoriesService: CategoriesService,
        private tasksService: TasksService,
        private _route: ActivatedRoute,
        private router: Router,
        public dialog: MatDialog,
    ) { }

    public acceptTask(task: ITask) {
    }
    ngOnInit() {
        // get all categories for nav bar
        this.categoriesService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });
        // get current category id
        this._routeSubscription = this._route.params.subscribe(currentParams => {
            this._categoryId = parseInt(currentParams.categoryId, 10);
            if (this._categoryId) {
                this._categoryParam = { categoryId: this._categoryId.toString() };
            }
        });
        // get relevant tasks
        this._route.data
            .subscribe((data: { tasks: ITask[] }) => {
                this.tasks = data.tasks;
            });
    }

    onAccept(task: ITask) {
        const acceptDialogRef = this.dialog.open(AcceptDialogComponent, {
            hasBackdrop: false,
            data: {
                id: task.id,
                title: task.title,
            },
        });
        acceptDialogRef.afterClosed().pipe(
            switchMap(event => {
                if (event === 'submit') {
                    return this.tasksService.getAllTasks(this._categoryParam);
                } else {
                    return []; // what I should return?
                }
            })).subscribe(
                tasks => {
                    this.tasks = tasks;
                });
    }

    onScroll() {
        const paramsObj = {
            offset: this.taskOffset.toString(),
        };
        if (this._categoryId) {
            Object.assign(paramsObj, this._categoryParam);
        }

        this.tasksService.getAllTasks(paramsObj).subscribe((tasks: ITask[]) => {
            this.tasks = this.tasks.concat(tasks);
        });
        this.taskOffset += 2;
    }
}
