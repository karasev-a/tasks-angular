import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './alert/alert.component';

// import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './+login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesModule } from './+categories/categories.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMaterialModule,

    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,

    // TaskModule,
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
  bootstrap: [AppComponent],
})
export class AppModule { }
