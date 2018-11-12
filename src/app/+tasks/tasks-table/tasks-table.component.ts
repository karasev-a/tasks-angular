import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITask, Statuses } from '../models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { DeleteDialogComponent } from '../../dialogs/delete/delete-dialog.component';
import { TasksService } from '../servises/tasks.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css'],
})

export class TasksTableComponent implements OnInit {
  public tasks: ITask[];
  public displayedColumns: string[] = ['title', 'createdAt', 'date', 'status', 'people', 'numberSubscribedPeople', 'category', 'actions'];
  public deleteDialogRef: MatDialogRef<DeleteDialogComponent>;
  public statuses = Statuses;
  public tasksDataSource = new MatTableDataSource<ITask>();
  public paramsObj: IParamsQueryTask;
  public filterForm: FormGroup;
  public categories: ICategory[];
  public keysOfStatuses: string[];
  public str = '';
  private _taskOffset = 0;
  private _taskLimit = 2;

  constructor(
    private _router: Router,
    private _activatrdRoute: ActivatedRoute,
    private _location: Location,
    public dialog: MatDialog,
    private _tasksService: TasksService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.paramsObj = {
      limit: this._taskLimit.toString(),
      offset: this._taskOffset.toString(),
    };
    this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasksUser: ITask[]) => {
      this.tasksDataSource.data = tasksUser;
    });
    this.categories = this._activatrdRoute.snapshot.data.categories;
    this.keysOfStatuses = Object.keys(this.statuses).filter(Number);

    this.filterForm = this._fb.group({
      categoryId: new FormControl(''),
      status: new FormControl(''),
      date: new FormControl(''),
    });
  }

  applySearch(filterValue: string) {
    this._taskOffset = 0;
    this.paramsObj.offset = this._taskOffset.toString();

    if (filterValue) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.paramsObj.title = filterValue;
    } else {
      delete this.paramsObj.title;
    }
    this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasksUser: ITask[]) => {
      this.tasksDataSource.data = tasksUser;
    });
  }

  onSelectStatus(filterValue: number) {
    if (filterValue) {
      this.paramsObj.status = filterValue.toString();
      this._taskOffset = 0;
      this.paramsObj.offset = this._taskOffset.toString();
      this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasksUser: ITask[]) => {
        this.tasksDataSource.data = tasksUser;
      });
    }
  }

  public onSelectCategory(filterValue: string[]) {
    if (filterValue) {
      this.paramsObj.categoryId = filterValue;
      this._taskOffset = 0;
      this.paramsObj.offset = this._taskOffset.toString();
      this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasksUser: ITask[]) => {
        this.tasksDataSource.data = tasksUser;
      });
    }
  }
  public onSelectDate(filterValue: Date) {
    if (filterValue) {
      this.paramsObj.dateStart = filterValue[0];
      this.paramsObj.dateEnd = filterValue[1];
      this._taskOffset = 0;
      this.paramsObj.offset = this._taskOffset.toString();
      this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasksUser: ITask[]) => {
        this.tasksDataSource.data = tasksUser;
      });
    }
  }

  public resetForm() {
    this.filterForm.reset();
    this._taskOffset = 0;
    for (const key in this.paramsObj) {
      if (key !== 'title') {
        delete this.paramsObj[`${key}`];
      }
    }
    this.paramsObj.offset = this._taskOffset.toString();
    this.paramsObj.limit = this._taskLimit.toString();
    this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasksUser: ITask[]) => {
      this.tasksDataSource.data = tasksUser;
    });
  }

  public deleteTask(task: ITask) {
    this.deleteDialogRef = this.dialog.open(DeleteDialogComponent, {
      hasBackdrop: false,
      data: {
        id: task.id,
        title: task.title,
        createdAt: task.createdAt,
        date: task.date,
      },
    });

    this.deleteDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._taskOffset = 0;
        this.paramsObj.offset = this._taskOffset.toString();
        this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe(tasksUser => {
          this.tasksDataSource.data = tasksUser;
        });
      }
    });

  }

  public editTask(task: ITask) {
    this._router.navigate(['/tasks', task.id]);
  }

  public onScroll() {
    this._taskOffset += 2;
    this.paramsObj.offset = this._taskOffset.toString();
    this.paramsObj.limit = this._taskLimit.toString();
    this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasks: ITask[]) => {
      this.tasksDataSource.data = this.tasksDataSource.data.concat(tasks);
    });
  }

}
