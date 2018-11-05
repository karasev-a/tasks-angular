import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';
import { UserProfileComponent } from './user-profile.component';

export const profileRouting: Routes = [ // TODO: rename module
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  // { path: 'profile/mytasks', component: TasksComponent,  canActivate: [AuthGuard]},
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
