import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { CustomMaterialModule } from '../core/material.module';

import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './servises/categories.service';
import { TasksService } from './servises/tasks.service';
import { TaskComponent } from './task/task.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppRoutingModule,

        CustomMaterialModule,
    ],
    declarations: [CategoriesComponent, TaskComponent],
    providers: [CategoriesService, TasksService],
    exports: [],
})
export class CategoriesModule { }
