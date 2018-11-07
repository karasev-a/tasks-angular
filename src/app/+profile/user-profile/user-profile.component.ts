import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../+user/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../+user/models/services/user.service';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    // styleUrls: ['./tasks.components.css'],
})

export class UserProfileComponent implements OnInit {
    public profileEditForm: FormGroup;
    private _isPswdBeChng = false;
    private _user: IUser;
    constructor(private _fb: FormBuilder, private _route: ActivatedRoute, private userService: UserService) { }

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
    }
    onPswd() {
        this._isPswdBeChng = true;
    }
    onSave() {
        const formUser = {
            firstName: this.profileEditForm.controls.firstName.value,
            lastName: this.profileEditForm.controls.lastName.value,
            email: this.profileEditForm.controls.email.value,
        };
        if (this._isPswdBeChng) {
            Object.assign(formUser, {
                oldPswd: this.profileEditForm.controls.oldPswd.value,
                newPswd: this.profileEditForm.controls.newPswd.value,
                cPswd: this.profileEditForm.controls.cPswd.value,
            });
        }
        this.userService.updateUser(formUser).pipe(
            mergeMap( success => {
                if (success) {
                    return this.userService.getUser();
                } else {
                    return;
                }
            })).subscribe( user => this._user = user);
    }
    onCancel() {
        this._isPswdBeChng = false;
        this.profileEditForm.patchValue({
            firstName: this._user.firstName,
            lastName: this._user.lastName,
            email: this._user.email,
        });
    }
}
