import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './servises/categories.service';
import { ICategory } from './models/categories';
import { ITask } from './models/task';
import { TasksService } from './servises/tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.components.css'],
})

export class TasksComponent implements OnInit {
    private categories: ICategory[];
    private tasks: ITask[];
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService, private route: ActivatedRoute) { }

    ngOnInit() {
        // #TODO: fix it with resolver
        // get all categories for nav bar
        this.categoriesService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });
        // this.tasksService.getAllTasks().subscribe(tasks => {
        //             this.tasks = tasks;
        // });
        this.route.data
        .subscribe((data: { tasks: ITask[] }) => {
            this.tasks = data.tasks;
        });
    }
    categoryClick(id: string) {
        this.route.data
        .subscribe((data: { tasks: ITask[] }) => {
            this.tasks = data.tasks;
        });

        // if (id !== '') {
        //     this.tasksService.getTasksByCategory(id).subscribe(tasks => {
        //         this.tasks = tasks;
        //     });
        // } else {
        //     this.tasksService.getAllTasks().subscribe(tasks => {
        //         this.tasks = tasks;
        //     });
        // }
    }
}
