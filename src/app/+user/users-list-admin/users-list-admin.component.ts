import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IUser } from '../models/user.model';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../models/services/user.service';
import { Roles } from '../../+tasks/models/task';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-users-list-manager',
    templateUrl: './users-list-admin.component.html',
    styleUrls: ['./users-list-admin.component.css'],
})

export class UsersListAdminComponent implements OnInit {
    public displayedColumns: string[] = ['firstName', 'lastName', 'createdAt', 'onReview', 'open', 'pending', 'done', 'decline', 'role', 'actions'];
    public userDataSource = new MatTableDataSource<IUser>();
    public roles = Roles;
    public keysOfRoles: string[];
    public userId: number;
    public currentUser: IUser;

    constructor(
        // private _router: Router,
        // private _activatedRoute: ActivatedRoute,
        // private _location: Location,
        // public dialog: MatDialog,
        private _usersService: UserService,
    ) { }
    public ngOnInit() {
        this._usersService.getAllUsersStatistic().subscribe((users: IUser[]) => {
            this.userDataSource.data = users;
        });
        this.keysOfRoles = Object.keys(this.roles).filter(Number);
    }

    public onSelectRole(value: string, user: IUser, id: number) {
        this.userId = id;
        user.roleId = value;
        this.currentUser = user;

    }

    public saveUser(user: any) {
        if (user.Tasks) {
            delete user.Tasks;
        }
        this._usersService.updateUserRole(user).subscribe();
        this.userId = 0;
    }

    public cancelEdit() {
        this.userId = 0;
    }

}
