import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CategoriesService } from './servises/categories.service';
import { ICategory } from './models/categories';
import { ITask } from './models/task';
import { TasksService } from './servises/tasks.service';

@Component({
    selector: 'app-tasks-view',
    templateUrl: './tasks-view.component.html',
    //   styleUrls: ['./tasks.component.css']
})

export class TasksViewComponent implements OnInit {
    // @ViewChild(router-outlet) private outTask: router-outlet;
    // @ViewChild() child;
    private categories: ICategory[];
    private tasks: ITask[];
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService) { }

    ngOnInit() {

        // get current categories id
        // this.hero$ = this.route.paramMap.pipe(
        //     switchMap((params: ParamMap) =>
        //         this.service.getHero(params.get('id')))
        // );
        // or other way
        // let id = this.route.snapshot.paramMap.get('id');
        // this.hero$ = this.service.getHero(id);

        this.categoriesService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });
        this.tasksService.getAllTasks().subscribe(tasks => {
            this.tasks = tasks;
        });
    }

    // ngAfterViewInit() {
    //     this.tasksService.getAllTasks().subscribe(tasks => {
    //         this.tasks = tasks;
    //     });
    //     this.outTask.tasks = this.tasks;
    // }
}
