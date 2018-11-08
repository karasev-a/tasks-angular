import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../+categories/models/category';

@Component({
    selector: 'app-categories-list',
    templateUrl: './A-categories-list.component.html',
    // styleUrls: ['./profile.component.css'],
})

export class ACategoryListComponent implements OnInit {
    private categories: ICategory[];
    constructor() { }
    ngOnInit() {
    }
}
