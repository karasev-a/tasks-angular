import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask, Statuses } from '../models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteDialogComponent } from '../../dialogs/delete/delete-dialog.component';
import { TasksService } from '../servises/tasks.service';


@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css'],
})

export class TasksTableComponent implements OnInit {
  public tasks: ITask[];
  public displayedColumns: string[] = ['title', 'createdAt', 'date', 'status', 'people', 'numberSubscribedPeople', 'actions'];
  public deleteDialogRef: MatDialogRef<DeleteDialogComponent>;
  public statuses = Statuses;
  private _taskOffset = 0;
  constructor(
    private _router: Router,
    private _activatrdRoute: ActivatedRoute,
    private _location: Location,
    public dialog: MatDialog,
    private _tasksService: TasksService,
  ) { }

  ngOnInit() {
    this.tasks = this._activatrdRoute.snapshot.data.tasksTable;
  }

  public deleteTask(task: ITask) {
    this.deleteDialogRef = this.dialog.open(DeleteDialogComponent, {
      hasBackdrop: false,
      data: {
        id: task.id,
        title: task.title,
        state: { createdAt: task.createdAt, date: task.date },
      },
    });

    this.deleteDialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this._tasksService.getAllTasksOfUser().subscribe(data => {
          this.tasks = data;
        });
      }
    });

  }

  public editTask(task: ITask) {
    this._router.navigate(['/tasks', task.id]);
  }

  onScroll() {
    const paramsObj = {
      offset: this._taskOffset.toString(),
    };

    this._tasksService.getAllTasksOfUser(paramsObj).subscribe((tasks: ITask[]) => {
      this.tasks = this.tasks.concat(tasks);
    });
    this._taskOffset += 2;
  }

}
