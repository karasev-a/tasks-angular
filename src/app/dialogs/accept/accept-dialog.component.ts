import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TasksService } from '../../+tasks/servises/tasks.service';
import { ITask } from '../../+tasks/models/task';

@Component({
  selector: 'app-accept.dialog',
  templateUrl: './accept-dialog.component.html',
})

export class AcceptDialogComponent {

  constructor(public dialogRef: MatDialogRef<AcceptDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ITask, public tasksService: TasksService) { }

  public onNoClick(): void {
    this.dialogRef.close('close');
  }

  public confirmAccept(taskId: string): void {
    this.tasksService.subscribeToTask(taskId).subscribe();
    this.dialogRef.close('submit');
  }
}
