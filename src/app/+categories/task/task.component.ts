import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../models/task';
import { TasksService } from '../servises/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
//   styleUrls: ['task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: ITask[];
  // private task: ITask;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getAllTasks().subscribe(tasks => {
        this.tasks = tasks;
    });
}
}
