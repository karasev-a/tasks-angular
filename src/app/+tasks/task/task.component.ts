import { Component, Input } from '@angular/core';
import { ITask } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
})
export class TaskComponent {
  @Input() tasks: ITask[];
  constructor() { }
}
