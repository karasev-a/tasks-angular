import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TasksService } from '../../+tasks/servises/tasks.service';
import { ITask, Statuses } from '../../+tasks/models/task';


@Component({
    selector: 'app-decline-task-dialog',
    templateUrl: './decline-task-dialog.component.html',
})

export class DeclineTaskDialogComponent {

    constructor(public dialogRef: MatDialogRef<DeclineTaskDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private _tasksService: TasksService) { }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public confirmDecline(): void {
        this.data.task.status = Statuses.Decline;
        const tmpTask = this.data.task;
        delete tmpTask.Category;
        delete tmpTask.firstLastName;
        this._tasksService.updateTask(this.data.task.id, this.data.task).subscribe(result => result);
    }

}
