import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { TasksService } from '../../+tasks/servises/tasks.service';

@Component({
    selector: 'app-delete.dialog',
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {

    constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, public tasksService: TasksService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    confirmDelete(): void {
        this.tasksService.deleteTask(this.data.id);
    }
}
