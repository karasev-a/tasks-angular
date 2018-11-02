import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask } from '../models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
// import { DeleteDialogComponent } from '../../dialogs/delete/delete-dialog.component';


@Component({
    selector: 'app-tasks-table',
    templateUrl: './tasks-table.component.html',
    styleUrls: ['./tasks-table.component.css'],
})

export class TasksTableComponent implements OnInit {
    public tasks: ITask[];
    public displayedColumns: string[] = ['title', 'createdAt', 'date', 'status', 'people', 'numberSubscribedPeople', 'actions'];

    constructor(
        private _router: Router,
        private _activatrdRoute: ActivatedRoute,
        private _location: Location,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.tasks = this._activatrdRoute.snapshot.data.tasksTable;
    }

    deleteTask(task: ITask) {

        // const dialogRef = this.dialog.open(DeleteDialogComponent, {
        //     data: {
        //         id: task.id,
        //         title: task.title,
        //         state: { createdAt: task.createdAt, date: task.date },
        //     },
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //     if (result === 1) {
        //         const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        //         // for delete we use splice in order to remove single object from DataService
        //         this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        //         this.refreshTable();
        //     }
        // });
    }

    public editTask(task: ITask) {
        this._router.navigate(['/tasks', task.id]);
    }

}
