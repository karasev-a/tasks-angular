import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription, from } from 'rxjs';

import { Location } from '@angular/common';
import { TasksService } from '../servises/tasks.service';
import { CustomValidators } from '../../core/custom-validators/customValidator';

import { ITask } from '../models/task';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task.edit.component.html',
    styleUrls: ['./task.edit.component.css'],
})
export class TaskEditComponent implements OnInit, OnDestroy {
    @Input() public task: ITask;
    public categories: ICategory[];
    public currentDate: Date;
    public taskEditForm: FormGroup;
    private _id: number;
    private _categoryId: number;
    private _routeSubscription: Subscription;
    private _querySubscription: Subscription;
    constructor(
        private _route: ActivatedRoute,
        private _taskService: TasksService,
        private _location: Location,
        private _fb: FormBuilder,
        private router: Router,
        // private _acyiveRouterSnap: ActivatedRouteSnapshot,
    ) { }

    public ngOnInit() {
        this.categories = this._route.snapshot.data.categories;
        this.currentDate = new Date();
        this._querySubscription = this._route.queryParams.subscribe(
            (queryParam: Params) => {
                this._categoryId = parseInt(queryParam.categoryId, 10);
            },
        );
        this.taskEditForm = this._fb.group({
            title: new FormControl(``, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
            description: new FormControl(''),
            people: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            price: new FormControl('', [Validators.required, Validators.min(0)]),
            date: new FormControl('', [Validators.required, CustomValidators.validateDateMoreCurrent]),
            // status: new FormControl(''),
            categoryId: new FormControl('', [Validators.required]),
        });
        const toSelect = this.categories.find(c => parseInt(c.id, 10) === this._categoryId);
        toSelect ? this.taskEditForm.get('categoryId').setValue(toSelect.id) : this.taskEditForm.get('categoryId').setValue('');
        this._routeSubscription = this._route.params.subscribe(params => {
            this._id = params.taskId;
            if (this._id) {
                this.taskEditForm.patchValue(this._route.snapshot.data.task);
            }
        });
    }

    public ngOnDestroy() {
        if (this._routeSubscription) {
            this._routeSubscription.unsubscribe();
        }
        if (this._querySubscription) {
            this._querySubscription.unsubscribe();
        }
    }

    public onSubmit() {
        let submitObservable: Observable<ITask>;
        submitObservable = this._id
            ? this._taskService.updateTask(this._id, this.taskEditForm.value)
            : this._taskService.createTask(this.taskEditForm.value);

        submitObservable.subscribe(res => {
            this.task = res;
            this._location.back();
        });
    }

    public goToBack() {
        this._location.back();
    }

}
