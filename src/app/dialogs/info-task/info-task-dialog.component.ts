import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TasksService } from '../../+tasks/servises/tasks.service';
import { ITask, Statuses } from '../../+tasks/models/task';

@Component({
    selector: 'app-info-task-dialog',
    templateUrl: './info-task-dialog.component.html',
})

export class InfoTaskDialogComponent {

    constructor(public dialogRef: MatDialogRef<InfoTaskDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ITask, private _tasksService: TasksService) { }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public confirmApprove(task: ITask): void {
        task.status = Statuses.Open;
        // delete task['Category'];
        // delete task['firstLastName'];
        this._tasksService.updateTask(task.id, task).subscribe();
    }
    public showComfirmDialog(): void {
        // this.tasksService.deleteTask(this.data.id).subscribe(result => result);
    }

}
