import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserResolverService } from './services/user-resolve.service';

export const profileRouting: Routes = [
  { path: 'profile', component: ProfileComponent, resolve: { user: UserResolverService}, canActivate: [AuthGuard]},
  // { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
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
