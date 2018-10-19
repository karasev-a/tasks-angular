import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    //   styleUrls: ['./tasks.component.css']
})

export class MainComponent { // implements OnInit
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
    constructor() { }

    someMethod() {
          this.trigger.openMenu();
    }

    // private service: TaskService) {  }
}
