import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
})
export class TaskComponent {
  @Input() tasks: ITask[];
  @Output() accept: EventEmitter<string> = new EventEmitter();
  constructor() { }
  onAccept(taskId: string) {
    this.accept.emit(taskId);

  }
}
