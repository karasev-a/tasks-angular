import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from './servises/categories.service';
import { ICategorie } from './models/categories';
import { ITask } from './models/task';
import { TasksService } from './servises/tasks.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  //   styleUrls: ['./tasks.component.css']
})

export class CategoriesComponent implements OnInit {

  private categories: ICategorie[];
  private tasks: ITask[][];
  constructor(private categoriesService: CategoriesService, private tasksService: TasksService) { }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.categories.forEach((item, i, arr) => {
      this.tasksService.getTasksByCategory(item.id).subscribe(task => {
        this.tasks[i] = task; // TODO: Check
      });
    });
}
}
