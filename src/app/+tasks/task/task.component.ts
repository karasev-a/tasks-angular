import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() tasks: ITask[];
  @Output() accept: EventEmitter<ITask> = new EventEmitter();
  constructor() { }
  onAccept(task: ITask) {
    this.accept.emit(task);

  }
}
