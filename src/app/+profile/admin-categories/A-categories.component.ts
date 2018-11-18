import { Component, OnInit } from '@angular/core';
import { ICategoriesStatistic, CategoriesService } from '../../+categories/services/categories.service';
import { TasksService } from '../../+tasks/servises/tasks.service';

@Component({
    selector: 'app-a-categories',
    templateUrl: './A-categories.component.html',
    // styleUrls: ['./profile.component.css'],
})

export class ACategoriesComponent implements OnInit {
    statistics: ICategoriesStatistic[]; // #TODO: replace interface some where else
    constructor(private categoriesService: CategoriesService, private tasksService: TasksService) { }
    ngOnInit() {
        this.categoriesService.getCategoriesStatistic().subscribe(result => {
            this.statistics = result;
        });
    }
}
