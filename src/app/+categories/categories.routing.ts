import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { TaskComponent } from './task/task.component';
import { TasksViewComponent } from './tasks-view.component';

export const categoriesRouting: Routes = [
  { path: 'categories', component: TasksViewComponent },
  {
    path: 'categories', children: [
      { path: '', component: TaskComponent },
      { path: ':id', component: TaskComponent },
    ],
  },

  // { path: 'all', component: TaskComponent },
  // { path: ':id', component: TaskComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(categoriesRouting),
  ],
  exports: [
    RouterModule,
  ],
})

export class CategoriesRouting { }
