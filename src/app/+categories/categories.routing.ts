import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksViewComponent } from './tasks-view.component';
import { TasksResolverService } from './servises/tasks-resolver.service';

export const categoriesRouting: Routes = [
  {
    path: 'categories', component: TasksViewComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      // { path: 'all', component: TaskComponent, resolve: { tasks: TasksResolverService} },
      { path: 'all', component: TaskComponent},
      { path: ':id', component: TaskComponent, resolve: { tasks: TasksResolverService} },
    ],
  },
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
