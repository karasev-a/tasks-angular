import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';

import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    // AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
