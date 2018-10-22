import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

import '../assets/css/styles.css';

@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }
  menuTrigger() {
        this.trigger.openMenu();
  }
}
