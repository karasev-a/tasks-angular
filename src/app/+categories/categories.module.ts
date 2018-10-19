import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { CustomMaterialModule } from '../core/material.module';

import { MainComponent } from './main/main.component';

@NgModule({
    imports: [
        RouterModule,
        AppRoutingModule,
        CommonModule,

        CustomMaterialModule,
    ],
    declarations: [MainComponent],
    providers: [],
    exports: [],
})
export class CategoriesModule { }
