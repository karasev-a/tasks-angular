import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IUser } from '../models/user.model';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../models/services/user.service';
import { Roles, Statuses } from '../../+tasks/models/task';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-users-list-manager',
    templateUrl: './users-list-admin.component.html',
    styleUrls: ['./users-list-admin.component.css'],
})

export class UsersListAdminComponent implements OnInit {
    public displayedColumns: string[] = ['firstName', 'lastName', 'createdAt', 'allTasks', 'onReview', 'open', 'pending', 'done', 'decline', 'role', 'actions'];
    public userDataSource = new MatTableDataSource<IUser>();
    public roles = Roles;
    public keysOfRoles: string[];
    public userId: number;
    public currentUser: IUser;
    public previousRole: string;
    public currentRole: string;
    public countSelectedRole: number = 0;
    public statuses = Statuses;

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
        this.countSelectedRole++;
        this.userId = id;
        if ( this.countSelectedRole < 2) {
            this.previousRole = user.roleId;
        }
        

        // this.currentUser = Object.assign({}, user);
        
        user.roleId = value;
        
       
        // this.currentRole = value;

    }

    public saveUser(user: any) {

        // user.roleId = this.currentRole;

        if (user.Tasks) {
            delete user.Tasks;
        }
        this._usersService.updateUserRole(user).subscribe();
        this.userId = 0;
        this.countSelectedRole = 0;
    }

    public cancelEdit(user: IUser) {
        user.roleId = this.previousRole;
        this.countSelectedRole = 0;
        
        // user.roleId = this.currentUser.roleId;
        
        this.userId = 0;

    }

}
