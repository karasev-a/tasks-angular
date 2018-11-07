import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../+user/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    // styleUrls: ['./tasks.components.css'],
})

export class UserProfileComponent implements OnInit {
    public profileEditForm: FormGroup;
    private _passState = false;
    private _user: IUser;
    constructor(private _fb: FormBuilder, private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.data.subscribe((data: { user: IUser }) => {
            this._user = data.user;
        });
        this.profileEditForm = this._fb.group({
            firstName: new FormControl(this._user.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
            lastName: new FormControl(this._user.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
            email: new FormControl(this._user.email, [Validators.required, Validators.min(1), Validators.max(255)]),
            oldPswd: new FormControl('', [Validators.required, Validators.min(4), Validators.max(255)]),
            newPswd: new FormControl('', [Validators.required, Validators.min(4), Validators.max(255)]),
            cPswd: new FormControl('', [Validators.required, Validators.min(4), Validators.max(255)]),
        });
        // this.profileEditForm.patchValue([this._user.firstName, this._user.lastName, this._user.email]);
    }
    onPswd() {
        this._passState = true;
    }
    onCancel() {
        this._passState = false;
        // this.profileEditForm.patchValue({
        //     firstname:
        //     lastName: this._user.lastName,
        //     email: this._user.email,
        // });
        this.profileEditForm.patchValue({
            firstName: this._user.firstName,
            lastName: this._user.lastName,
            email: this._user.email,
          });
    }
}
