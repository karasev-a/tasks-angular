import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoriesComponent } from './categories.component';

export  const routes: Routes = [
    // { path: '', component: CategoriesComponent },
  ];

export  const routing: ModuleWithProviders = RouterModule.forChild(routes);
