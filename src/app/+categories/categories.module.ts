import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { CustomMaterialModule } from '../core/material.module';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './servises/categorie.service';

@NgModule({
    imports: [
        RouterModule,
        AppRoutingModule,
        CommonModule,

        CustomMaterialModule,
    ],
    declarations: [CategoriesComponent],
    providers: [CategoriesService],
    exports: [],
})
export class CategoriesModule { }
