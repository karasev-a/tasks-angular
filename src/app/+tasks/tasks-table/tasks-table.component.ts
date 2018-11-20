import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ITask, Statuses } from '../models/task';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { DeleteDialogComponent } from '../../dialogs/delete/delete-dialog.component';
import { TasksService } from '../servises/tasks.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from '../../+user/models/services/user.service';
import { IUser } from '../../+user/models/user.model';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css'],
})

export class TasksTableComponent implements OnInit {
  @Input() tasksAdminDataSource = new MatTableDataSource<ITask>();
  @Input() tasksForAdmin: ITask[];
  @Input() isAdmin: false;
  public tasks: ITask[];
  public displayedColumns: string[] = ['title', 'createdAt', 'date', 'status', 'people', 'numberSubscribedPeople', 'category', 'actions'];
  public displayedColumnsAdmin: string[] = ['title', 'createdAt', 'date', 'status', 'people', 'numberSubscribedPeople', 'category', 'user', 'actions'];
  public deleteDialogRef: MatDialogRef<DeleteDialogComponent>;
  public statuses = Statuses;
  public tasksDataSource = new MatTableDataSource<ITask>();
  public paramsObj: IParamsQueryTask;
  public filterForm: FormGroup;
  public categories: ICategory[];
  public keysOfStatuses: string[];
  public str = '';
  public users: IUser[];
  private _taskOffset = 0;
  private _taskLimit = 2;

  constructor(
    private _router: Router,
    private _activatrdRoute: ActivatedRoute,
    private _location: Location,
    public dialog: MatDialog,
    private _tasksService: TasksService,
    private _usersService: UserService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.paramsObj = {
      limit: this._taskLimit.toString(),
      offset: this._taskOffset.toString(),
    };

    if (this.isAdmin) {
      this._usersService.getAllUsersForAdmin().subscribe( allUsers => {
        this.users = allUsers;
      });
    }

    this.checkRole(this.paramsObj);

    this.categories = this._activatrdRoute.snapshot.data.categories;
    this.keysOfStatuses = Object.keys(this.statuses).filter(Number);

    this.filterForm = this._fb.group({
      categoryId: new FormControl(''),
      status: new FormControl(''),
      date: new FormControl(''),
      userId: new FormControl(''),
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
    this.checkRole(this.paramsObj);
  }

  onSelectStatus(filterValue: number) {
    if (filterValue) {
      this.paramsObj.status = filterValue.toString();
      this._taskOffset = 0;
      this.paramsObj.offset = this._taskOffset.toString();
      this.checkRole(this.paramsObj);
    }
  }

  public onSelectCategory(filterValue: string[]) {
    if (filterValue) {
      this.paramsObj.categoryId = filterValue;
      this._taskOffset = 0;
      this.paramsObj.offset = this._taskOffset.toString();
      this.checkRole(this.paramsObj);
    }
  }
  public onSelectDate(filterValue: Date) {
    if (filterValue) {
      this.paramsObj.dateStart = filterValue[0];
      this.paramsObj.dateEnd = filterValue[1];
      this._taskOffset = 0;
      this.paramsObj.offset = this._taskOffset.toString();
      this.checkRole(this.paramsObj);
    }
  }

  public onSelectUser(filterValue: string[]) {
    if (filterValue) {
      this.paramsObj.userId = filterValue;
      this._taskOffset = 0;
      this.paramsObj.offset = this._taskOffset.toString();
      this.checkRole(this.paramsObj);
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
    this.checkRole(this.paramsObj);
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
        this.checkRole(this.paramsObj);
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

    (!this.isAdmin)
      ? this._tasksService.getAllTasksOfUser(this.paramsObj).subscribe((tasksUser: ITask[]) => {
        this.tasksDataSource.data = this.tasksDataSource.data.concat(tasksUser);
      })
      : this._tasksService.getAllTasksForAdmin(this.paramsObj).subscribe((tasksForAdmin: ITask[]) => {
        this.tasksDataSource.data = this.tasksDataSource.data.concat(tasksForAdmin);
      });
  }

  public checkRole(paramsObj: IParamsQueryTask) {
    (!this.isAdmin)
      ? this._tasksService.getAllTasksOfUser(paramsObj).subscribe((tasksUser: ITask[]) => {
        this.tasksDataSource.data = tasksUser;
      })
      : this._tasksService.getAllTasksForAdmin(paramsObj).subscribe((tasksForAdmin: ITask[]) => {
        this.tasksDataSource.data = tasksForAdmin;
      });
  }

}
