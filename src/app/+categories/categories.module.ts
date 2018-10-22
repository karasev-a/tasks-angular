import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { CustomMaterialModule } from '../core/material.module';

import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './servises/categorie.service';

@NgModule({
    imports: [
        RouterModule,
        AppRoutingModule,
        CommonModule,

        CustomMaterialModule,
    ],
    declarations: [MainComponent, CategoriesComponent],
    providers: [CategoriesService],
    exports: [],
})
export class CategoriesModule { }
