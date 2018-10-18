import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TasksComponent } from './tasks.component';
// import { from } from 'rxjs';

// import { UsersComponent } from './users.component';
// import { ManipulateUserComponent } from './components/manipulate-user.component';

export  const routes: Routes = [
    // { path: 'tasks/:id/update', component: ManipulateUserComponent },
    { path: 'tasks', component: TasksComponent },
    // { path: 'tasks/create', component: ManipulateUserComponent },
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
