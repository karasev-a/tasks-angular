import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TasksService } from '../../+tasks/servises/tasks.service';

@Component({
  selector: 'app-accept.dialog',
  templateUrl: './accept-dialog.component.html',
})

export class AcceptDialogComponent {

  constructor(public dialogRef: MatDialogRef<AcceptDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public tasksService: TasksService) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAccept(taskId: string): void {
    this.tasksService.subscribeToTask(taskId).subscribe();
  }
}
