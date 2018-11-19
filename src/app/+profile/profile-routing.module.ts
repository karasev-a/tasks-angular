import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile.component';
import { UserResolverService } from './services/user-resolve.service';
import { UserProfileComponent } from '../+user/user-profile/user-profile.component';
import { TasksTableComponent } from '../+tasks/tasks-table/tasks-table.component';
import { CategoriesListResolverService } from '../+categories/services/categories-list.resolver';

export const profileRouting: Routes = [
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
    children: [
      { path: 'user', component: UserProfileComponent, resolve: { user: UserResolverService } },
      { path: '', component: UserProfileComponent, resolve: { user: UserResolverService }},
      { path: 'my-tasks', component: TasksTableComponent, resolve: { categories: CategoriesListResolverService}},
    ],
  },
  // { path: 'profile', component: UserProfileComponent, resolve: { user: UserResolverService}, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(profileRouting),
  ],
  exports: [
    RouterModule,
  ],
})

export class ProfileRouting { }
