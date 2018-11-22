import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../core/material.module';
import { ProfileRouting } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserService } from '../+user/models/services/user.service';
import { UserResolverService } from './services/user-resolve.service';
import { UsersListAdminComponent } from '../+user/users-list-admin/users-list-admin.component';
import { ACategoriesComponent } from './admin-categories/A-categories.component';
import { AAddNewCategoryComponent } from './admin-categories/A-addNew-category.component';
import { ACategoryListComponent } from './admin-categories/A-categories-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RenameDialogComponent } from '../dialogs/rename/rename-dialog.component';
import { UserProfileComponent } from '../+user/user-profile/user-profile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        ProfileRouting,
        MatDialogModule,
    ],
    declarations: [
        UserProfileComponent,
        ProfileComponent,
        ACategoriesComponent,
        AAddNewCategoryComponent,
        ACategoryListComponent,
        RenameDialogComponent,
        UsersListAdminComponent],
    entryComponents: [
        RenameDialogComponent,
    ],
    providers: [UserService, UserResolverService],
    exports: [],
})
export class ProfileModule { }
