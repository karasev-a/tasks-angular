import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../+categories/services/categories.service';

@Component({
    selector: 'app-add-categories',
    templateUrl: './A-addNew-category.component.html',
    // styleUrls: ['./profile.component.css'],
})

export class AAddNewCategoryComponent implements OnInit {
    private newCategoryForm: FormGroup;
    constructor(private _fb: FormBuilder, private categoriesService: CategoriesService) { }
    ngOnInit() {
        this.newCategoryForm = this._fb.group({
            categoryName: new FormControl( '', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
        });
    }
    onAdd() {
       this.categoriesService.sendNewCategory({ name: this.newCategoryForm.value.categoryName } as ICategory).subscribe();
    }
}
