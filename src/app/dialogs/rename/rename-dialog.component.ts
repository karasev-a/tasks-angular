import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-rename.dialog',
    templateUrl: './rename-dialog.component.html',
})

export class RenameDialogComponent implements OnInit {
    form: FormGroup;
    constructor(public dialogRef: MatDialogRef<RenameDialogComponent>, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: ICategory) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            categoryName: this.data.name,
        });
    }
    public submit(form: FormGroup): void {
        this.dialogRef.close(`${form.value.categoryName}`);
    }
}
