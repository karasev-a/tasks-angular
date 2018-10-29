import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskEditComponent } from './+tasks/task-edit/task.edit.component';
import { TaskEditResolverService } from './+tasks/servises/task.edit.resolver.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'categories/createTask', component: TaskEditComponent },
  {
    path: 'tasks/:taskId', component: TaskEditComponent,
    resolve: {
      task: TaskEditResolverService,
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
