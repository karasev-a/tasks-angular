import { Component, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    //   styleUrls: ['./tasks.component.css']
})

export class TasksComponent { // implements OnInit

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    private users: ITask[];
    constructor() { }

    someMethod() {
        this.trigger.openMenu();
      }
    // private service: TaskService) {  }
}
