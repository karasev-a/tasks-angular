import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategory } from './models/categories';
import { MatTabChangeEvent } from '@angular/material';
import { ITask } from './models/task';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent {
  @Input() categories: ICategory[];
  // @Input() tasks: ITask[];
  // @Output() outTabIndex: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  // tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
  //   this.outTabIndex.emit(tabChangeEvent.index);
  // }
}
