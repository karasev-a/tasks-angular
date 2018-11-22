import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategoriesStatistic } from '../../+categories/services/categories.service';

@Component({
    selector: 'app-categories-list',
    templateUrl: './A-categories-list.component.html',
    styleUrls: ['./A-categories-list.component.css'],
})

export class ACategoryListComponent {
    @Input() statistics: ICategoriesStatistic[];
    @Output() rename: EventEmitter<string> = new EventEmitter();
    @Output() delete: EventEmitter<string> = new EventEmitter();
    constructor() { }
    public onDelete(categoryId: string) {
        this.delete.emit(categoryId);
    }
    public onEdit(categoryId: string) {
        this.rename.emit(categoryId);
    }
}
