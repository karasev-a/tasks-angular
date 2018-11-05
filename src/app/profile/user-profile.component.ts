import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    // styleUrls: ['./tasks.components.css'],
})

export class UserProfileComponent implements OnInit {
    public profileEditForm: FormGroup;
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.profileEditForm = this._fb.group({
            firstName: new FormControl(``, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
            lastName: new FormControl(''),
            email: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
        });
    }
}
