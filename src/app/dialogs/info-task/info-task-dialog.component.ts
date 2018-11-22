import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { TasksService } from '../../+tasks/servises/tasks.service';
import { ITask, Statuses } from '../../+tasks/models/task';
import { DeclineTaskDialogComponent } from '../decline-dialog/decline-task-dialog.component';
import { ITaskView } from '../models/TaskView';

@Component({
    selector: 'app-info-task-dialog',
    templateUrl: './info-task-dialog.component.html',
})

export class InfoTaskDialogComponent {
    public declineTaskDialogRef: MatDialogRef<DeclineTaskDialogComponent>;

    constructor(public dialogRef: MatDialogRef<InfoTaskDialogComponent>,
                public dialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public data: ITaskView, private _tasksService: TasksService) { }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public confirmApprove(): void {
        this.data.status = Statuses.Open;
        const tmpTask = this.data;
        delete tmpTask.Category;
        delete tmpTask.firstLastName;
        this._tasksService.updateTask(this.data.id, tmpTask).subscribe(result => result);
    }
    public showDeclineDialog(task: ITask): void {
        this.declineTaskDialogRef = this.dialog.open(DeclineTaskDialogComponent, {
            hasBackdrop: false,
            data: {task},
        });

        this.declineTaskDialogRef.afterClosed().subscribe( result => {
            if (result) {
                this.dialogRef.close('Confirm');
            }
        });
    }

}
