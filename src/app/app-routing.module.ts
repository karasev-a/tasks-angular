import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './register/register.component';

// import { CategoriesComponent } from './+categories/categories.component';
import { MainComponent } from './+categories/main/main.component';
// import { TasksComponent } from './+task/tasks.component';
// import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  {
    path: 'categories', children: [
      { path: '', component: MainComponent },
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
