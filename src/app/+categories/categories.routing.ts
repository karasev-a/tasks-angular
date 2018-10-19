import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories.component';

export  const routes: Routes = [
    { path: 'categories', component: MainComponent },
    { path: 'categories/all', component: CategoriesComponent },
  ];

export  const routing: ModuleWithProviders = RouterModule.forChild(routes);
