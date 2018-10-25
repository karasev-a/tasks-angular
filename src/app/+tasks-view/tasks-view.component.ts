import { Component, OnInit } from '@angular/core';
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
    private categories: ICategory[];
    private tasks: ITask[];
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService) { }

    ngOnInit() {
        // #TODO: fix it with resolver
        this.tasksService.getAllTasks().subscribe(tasks => {
            this.tasks = tasks;
        });
        // get all categories for nav bar
        this.categoriesService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });

    }
}
