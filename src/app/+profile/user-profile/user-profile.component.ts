import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../+user/models/user.model';
import { Route } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    // styleUrls: ['./tasks.components.css'],
})

export class UserProfileComponent implements OnInit {
    public profileEditForm: FormGroup;
    private passState = false;
    private user: IUser;
    constructor(private _fb: FormBuilder, private route: Route) { }

    ngOnInit() {
        // this.route.data.subscribe((data: { user: IUser }) => {
            // this.user = data.user;
        // });

        this.profileEditForm = this._fb.group({
            firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
            email: new FormControl('', [Validators.required, Validators.min(1), Validators.max(255)]),
            oldPswd: new FormControl('', [Validators.required, Validators.min(4), Validators.max(255)]),
            newPswd: new FormControl('', [Validators.required, Validators.min(4), Validators.max(255)]),
            cPswd: new FormControl('', [Validators.required, Validators.min(4), Validators.max(255)]),

        });
    }
    onPswd() {
        this.passState = !this.passState;
    }
}
