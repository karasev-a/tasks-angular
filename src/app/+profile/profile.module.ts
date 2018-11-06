import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../core/material.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileRouting } from './profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        ReactiveFormsModule,
        ProfileRouting,
    ],
    declarations: [UserProfileComponent],
    providers: [],
    exports: [],
})
export class ProfileModule { }
