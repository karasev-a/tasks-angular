import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskEditComponent } from './+tasks/task-edit/task.edit.component';
import { TaskEditResolverService } from './+tasks/servises/task.edit.resolver.service';
import { CategoriesListResolverService } from './+categories/services/categories-list.resolver';
import { TasksTableComponent } from './+tasks/tasks-table/tasks-table.component';
import { TasksListManagerComponent } from './+tasks/tasks-list-manager/tasks-list-manager.component';
import { PrivilegedGuard } from './auth/privileged.guard';
import { Roles } from './+user/models/roles';
import { TasksListAdminComponent } from './+tasks/tasks-list-admin/tasks-list-admin.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  {
    path: 'categories/new-task',
    component: TaskEditComponent,
    resolve: {
      categories: CategoriesListResolverService,
    },
  },
  {
    path: 'tasks/:taskId', component: TaskEditComponent,
    resolve: {
      task: TaskEditResolverService,
      categories: CategoriesListResolverService,
    },
  },
  {
    path: 'my-tasks', component: TasksTableComponent,
    resolve: {
      categories: CategoriesListResolverService,
    },
  },
  {
    path: 'manager-tasks', component: TasksListManagerComponent, data: {roles: [Roles.manager, Roles.admin] }, canActivate: [PrivilegedGuard],
  },
  {
    path: 'admin-tasks', component: TasksListAdminComponent,
    data: {roles: Roles.admin}, canActivate: [PrivilegedGuard],
    resolve: {
      categories: CategoriesListResolverService,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
