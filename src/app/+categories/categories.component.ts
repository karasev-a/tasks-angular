import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from './servises/categorie.service';
import { ICategorie } from './models/categories';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    //   styleUrls: ['./tasks.component.css']
})

export class CategoriesComponent implements OnInit {

    private categories: ICategorie[];
    constructor(private categorieService: CategoriesService) { }

    ngOnInit() {
        this.categorieService.getAllCategories().subscribe( categories => {
      this.categories = categories;
    });
  }

}
