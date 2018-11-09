import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './alert/alert.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesModule } from './+tasks/tasks.module';
import { DeleteDialogComponent } from './dialogs/delete/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    CategoriesModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthGuard,
  ],
  entryComponents: [
    DeleteDialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
