import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../+categories/services/categories.service';
import { ITask } from '../../+tasks/models/task';
import { TasksService, ICategoriesStatistic } from '../../+tasks/servises/tasks.service';

@Component({
    selector: 'app-categories-list',
    templateUrl: './A-categories-list.component.html',
    styleUrls: ['./A-categories-list.component.css'],
})

export class ACategoryListComponent implements OnInit {
    statistics: ICategoriesStatistic[];
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService) { }
    ngOnInit() {
        this.tasksService.getCategoriesStatistic().subscribe( result => {
            this.statistics = result;
        });
    }
    onDelete(categoryName: string) {
        const currentCategory = this.statistics.filter( el => categoryName === el.Category.name);
        // console.log(currentCategory[0].categoryId);
    }
}
