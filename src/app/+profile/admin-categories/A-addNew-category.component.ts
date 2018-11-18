import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-categories',
    templateUrl: './A-addNew-category.component.html',
    // styleUrls: ['./profile.component.css'],
})

export class AAddNewCategoryComponent implements OnInit {
    @Output() addNewCategory: EventEmitter<string> = new EventEmitter();
    private newCategoryForm: FormGroup;
    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this.newCategoryForm = this._fb.group({
            categoryName: new FormControl( '', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
        });
    }
    onAdd() {
        this.addNewCategory.emit(this.newCategoryForm.value.categoryName);
        this.newCategoryForm.reset();
    }
}
