import { Component, Input } from '@angular/core';
import { ICategory } from './models/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent {
  @Input() categories: ICategory[];
  constructor() { }
}
