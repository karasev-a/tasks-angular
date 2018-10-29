import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../core/material.module';

import { CategoriesService } from './servises/categories.service';
import { TasksService } from './servises/tasks.service';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { CategoriesRouting } from './tasks-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { TasksResolverService } from './servises/tasks-resolver.service';
import { TaskEditComponent } from './task-edit/task.edit.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        AppRoutingModule,
        CategoriesRouting,
        ReactiveFormsModule,
    ],
    declarations: [TaskComponent, TasksComponent, TaskEditComponent],
    providers: [CategoriesService, TasksService, TasksResolverService],
    exports: [],
})
export class CategoriesModule { }
