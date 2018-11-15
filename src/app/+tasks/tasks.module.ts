import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CustomMaterialModule } from '../core/material.module';

import { CategoriesService } from '../+categories/services/categories.service';
import { TasksService } from './servises/tasks.service';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { CategoriesRouting } from './tasks-routing.module';
import { TasksResolverService } from './servises/tasks-resolver.service';
import { TaskEditComponent } from './task-edit/task.edit.component';
import { AcceptDialogComponent } from '../dialogs/accept/accept-dialog.component';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksListManagerComponent } from './tasks-list-manager/tasks-list-manager.component';
import { TasksListAdminComponent } from './tasks-list-admin/tasks-list-admin.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CustomMaterialModule,
        CategoriesRouting,
        ReactiveFormsModule,
        InfiniteScrollModule,
    ],
    declarations: [
        TaskComponent,
        TasksComponent,
        TaskEditComponent,
        AcceptDialogComponent,
        TasksTableComponent,
        TasksListManagerComponent,
        TasksListAdminComponent,
    ],
    entryComponents: [
        AcceptDialogComponent,
      ],
    providers: [CategoriesService, TasksService, TasksResolverService],
    exports: [],
})
export class CategoriesModule { }
