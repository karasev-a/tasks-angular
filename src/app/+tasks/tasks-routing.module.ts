import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TasksResolverService } from './servises/tasks-resolver.service';
import { AuthGuard } from '../auth/auth.guard';

export const categoriesRouting: Routes = [ // TODO: rename module
  { path: 'categories', component: TasksComponent, resolve: { tasks: TasksResolverService}, canActivate: [AuthGuard] },
  { path: 'categories/:categoryId', component: TasksComponent, resolve: { tasks: TasksResolverService}, canActivate: [AuthGuard]},
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
