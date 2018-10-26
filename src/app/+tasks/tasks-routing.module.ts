import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TasksResolverService } from './servises/tasks-resolver.service';

export const categoriesRouting: Routes = [ // TODO: rename module
  { path: 'categories', component: TasksComponent, resolve: { tasks: TasksResolverService}},
  { path: 'categories/:id', component: TasksComponent, resolve: { tasks: TasksResolverService}},
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
