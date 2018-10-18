import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    //   styleUrls: ['./tasks.component.css']
})
export class TasksComponent { // implements OnInit
    private users: ITask[];
    constructor() { }
    // private service: TaskService) {  }
}
