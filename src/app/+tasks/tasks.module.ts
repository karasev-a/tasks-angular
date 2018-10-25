import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '../core/material.module';

import { CategoriesService } from './servises/categories.service';
import { TasksService } from './servises/tasks.service';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { CategoriesRouting } from './tasks-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { TasksResolverService } from './servises/tasks-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        AppRoutingModule,
        CategoriesRouting,
    ],
    declarations: [TaskComponent, TasksComponent],
    providers: [CategoriesService, TasksService, TasksResolverService],
    exports: [],
})
export class CategoriesModule { }
