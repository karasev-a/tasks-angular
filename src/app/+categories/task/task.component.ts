import { Component, Input } from '@angular/core';
import { ITask } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
//   styleUrls: ['task.component.css'],
})
export class TaskComponent {
  @Input() task: ITask;
  // private task: ITask;
  constructor() { }

}
