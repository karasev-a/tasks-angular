import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './+categories/categories.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  {
    path: 'categories', children: [
      { path: '', component: CategoriesComponent },
    ],
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
