import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask } from '../models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'app-tasks-table',
    templateUrl: './tasks-table.component.html',
    styleUrls: ['./tasks-table.component.css'],
})

export class TasksTableComponent implements OnInit {
    
    public tasks: ITask[];
    public displayedColumns: string[] = ['title', 'createdAt', 'date', 'status', 'people',  'numberSubscribedPeople', 'actions'];

    constructor(
        private _router: Router,
        private _activatrdRoute: ActivatedRoute,
        private _location: Location,
      ) { }

    ngOnInit() {
        this.tasks = this._activatrdRoute.snapshot.data.tasksTable;
    }

}
