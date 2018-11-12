import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, Params } from '@angular/router';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { ITask, Statuses } from '../models/task';
import { TasksService } from '../servises/tasks.service';
import { CategoriesService } from '../../+categories/services/categories.service';
import { InfoTaskDialogComponent } from '../../dialogs/info-task/info-task-dialog.component';

@Component({
    selector: 'app-tasks-list-manager',
    templateUrl: './tasks-list-manager.component.html',
    styleUrls: ['./tasks-list-manager.component.css'],
})

export class TasksListManagerComponent implements OnInit {
    public displayedColumns: string[] = ['title', 'category', 'createdAt', 'firstLastName', 'actions'];
    public categories: ICategory[];
    public tasksDataSource = new MatTableDataSource<ITask>();
    public paramsObj: IParamsQueryTask;
    public infoTaskDialogRef: MatDialogRef<InfoTaskDialogComponent>;

    constructor(
        // private _router: Router,
        private _activatedRoute: ActivatedRoute,
        // private _location: Location,
        public dialog: MatDialog,
        private _tasksService: TasksService,
        private _categoriesService: CategoriesService,
    ) { }

    public ngOnInit() {
        this._categoriesService.getCategoryOfManager().subscribe((categories: ICategory[]) => {
            this.categories = categories;
        });
        this._tasksService.geAllTasksOfManager().subscribe((tasksUser: ITask[]) => {
            this.tasksDataSource.data = tasksUser;
        });
    }

    public onSelectCategory(filterValue: string[]) {
        this.paramsObj = { categoryId: filterValue };
        this._tasksService.geAllTasksOfManager(this.paramsObj).subscribe((tasksUser: ITask[]) => {
            this.tasksDataSource.data = tasksUser;
        });
    }

    public showInfoTask(task: ITask) {
        this.infoTaskDialogRef = this.dialog.open(InfoTaskDialogComponent, {
            hasBackdrop: false,
            data: {
                task,
            },
        });

        this.infoTaskDialogRef.afterClosed().subscribe( result => {
            if (result) {
                this._tasksService.geAllTasksOfManager().subscribe(tasksUser => {
                    this.tasksDataSource.data = tasksUser;
                });
            }
        });
    }
}
