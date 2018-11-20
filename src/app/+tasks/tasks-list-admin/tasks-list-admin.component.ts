import { Component, OnInit } from '@angular/core';
import { TasksService } from '../servises/tasks.service';
import { MatTableDataSource } from '@angular/material';
import { ITask, Statuses } from '../models/task';

@Component({
    selector: 'app-tasks-list-component',
    templateUrl: './tasks-list-admin.component.html',
    styleUrls: ['./tasks-list-admin.component.css'],

})
export class TasksListAdminComponent implements OnInit {
    public isAdmin = false;
    constructor(
        private _tasksService: TasksService,
    ) { }

    ngOnInit() {
        this.isAdmin = true;
    }

}
