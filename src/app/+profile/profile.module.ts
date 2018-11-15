import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../core/material.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileRouting } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserService } from '../+user/models/services/user.service';
import { UserResolverService } from './services/user-resolve.service';
import { UsersListAdminComponent } from '../+user/users-list-admin/users-list-admin.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        ProfileRouting,
    ],
    declarations: [UserProfileComponent, ProfileComponent, UsersListAdminComponent],
    providers: [UserService, UserResolverService],
    exports: [],
})
export class ProfileModule { }
