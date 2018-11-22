import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskEditComponent } from './+tasks/task-edit/task.edit.component';
import { TaskEditResolverService } from './+tasks/servises/task.edit.resolver.service';
import { CategoriesListResolverService } from './+categories/services/categories-list.resolver';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full', canActivate: [AuthGuard] },
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
