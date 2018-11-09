import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription, from } from 'rxjs';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { ITask, Statuses } from '../models/task';
import { TasksService } from '../servises/tasks.service';
import { CategoriesService } from '../../+categories/services/categories.service';

@Component({
    selector: 'app-tasks-list-manager',
    templateUrl: './tasks-list-manager.component.html',
    styleUrls: ['./tasks-list-manager.component.css'],
})

export class TasksListManagerComponent implements OnInit {
    public displayedColumns: string[] = ['title', 'category', 'createdAt', 'firstLastName', 'actions'];
    public categories: ICategory[];
    public tasksDataSource = new MatTableDataSource<ITask>();
    public paramsObj: IParamsQueryTask;

    constructor(
        // private _router: Router,
        private _activatedRoute: ActivatedRoute,
        // private _location: Location,
        // public dialog: MatDialog,
        private _tasksService: TasksService,
        private _categoriesService: CategoriesService,
    ) { }

    ngOnInit() {
        this._categoriesService.getCategoryOfManager().subscribe( (categories: ICategory[]) => {
            this.categories = categories;
        });
        this._tasksService.geAlTasksOfManager().subscribe((tasksUser: ITask[]) => {
            this.tasksDataSource.data = tasksUser;
        });
    }

    public onSelectCategory(filterValue: string[]) {
        this.paramsObj = {categoryId: filterValue};
        this._tasksService.geAlTasksOfManager(this.paramsObj).subscribe((tasksUser: ITask[]) => {
            this.tasksDataSource.data = tasksUser;
        });
    }
}
