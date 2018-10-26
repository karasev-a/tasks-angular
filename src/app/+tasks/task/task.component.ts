import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ITask } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
  //   styleUrls: ['task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() tasks: ITask[];
  // constructor(private route: ActivatedRoute) { }
  constructor() { }

  ngOnInit() {
    // get tasks from resolver
    // this.route.data
    // .subscribe((data: { tasks: ITask[] }) => {
    //   this.tasks = data.tasks;
    // });
  }
}
