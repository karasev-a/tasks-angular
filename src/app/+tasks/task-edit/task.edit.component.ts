import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription, from } from 'rxjs';

import { Location } from '@angular/common';
import { TasksService } from '../servises/tasks.service';
import { CustomValidators } from '../../core/custom-validators/customValidator';

import { ITask } from '../models/task';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task.edit.component.html',
    styles: [`
        mat-form-field {
        width: 100%;
      }
    `],

})
export class TaskEditComponent implements OnInit, OnDestroy {
    @Input() public task: ITask;
    public categories: ICategory[];
    public currentDate: Date;
    public taskEditForm: FormGroup;
    private _id: number;
    private _routeSubscription: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _taskService: TasksService,
        private _location: Location,
        private _fb: FormBuilder,
    ) { }

    public ngOnInit() {
        this.categories = this._route.snapshot.data.categories;
        this.currentDate = new Date();
        this.taskEditForm = this._fb.group({
            title: new FormControl(``, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
            description: new FormControl(''),
            people: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
            price: new FormControl('', [Validators.required, Validators.min(0)]),
            date: new FormControl('', [Validators.required, CustomValidators.validateDateMoreCurrent(this.currentDate)]),
            // status: new FormControl(''),
            categoryId: new FormControl('', [Validators.required]),
            // userId: new FormControl(''),
        });
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
}
