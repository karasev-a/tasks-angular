import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../+categories/models/category';
import { CategoriesService } from '../../+categories/services/categories.service';
import { ITask } from '../../+tasks/models/task';
import { TasksService } from '../../+tasks/servises/tasks.service';

@Component({
    selector: 'app-categories-list',
    templateUrl: './A-categories-list.component.html',
    // styleUrls: ['./profile.component.css'],
})

export class ACategoryListComponent implements OnInit {
    categories: ICategory[];
    tasks: ITask;
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService) { }
    ngOnInit() {
        this.categoriesService.getAllCategories().subscribe( categories => this.categories = categories );
        // this.tasksService.().subscribe( categories => this.categories = categories );
    }
}
