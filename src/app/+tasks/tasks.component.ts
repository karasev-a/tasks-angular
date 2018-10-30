import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../+categories/services/categories.service';
import { ITask } from './models/task';
import { TasksService } from './servises/tasks.service';
import { ActivatedRoute } from '@angular/router';

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
        // get all categories for nav bar
        this.categoriesService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        });
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
    }
}
