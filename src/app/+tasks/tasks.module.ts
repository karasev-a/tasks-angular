import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../core/material.module';

import { CategoriesService } from '../+categories/services/categories.service';
import { TasksService } from './servises/tasks.service';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { CategoriesRouting } from './tasks-routing.module';
import { TasksResolverService } from './servises/tasks-resolver.service';
import { TaskEditComponent } from './task-edit/task.edit.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        CategoriesRouting,
        ReactiveFormsModule,
    ],
    declarations: [TaskComponent, TasksComponent, TaskEditComponent, TasksTableComponent],
    providers: [CategoriesService, TasksService, TasksResolverService],
    exports: [],
})
export class CategoriesModule { }
