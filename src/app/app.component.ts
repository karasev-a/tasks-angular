import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, from } from 'rxjs';

import '../assets/css/styles.css';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  private isLoggedIn$: boolean;
  private _categoryId: number;
  private _routeSubscription: Subscription;

  constructor(private authService: AuthService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isAuthenticated;
    this._routeSubscription = this._route.params.subscribe(params => {
      this._categoryId = params.categoryId;
    });
  }
  public ngOnDestroy() {
    if (this._routeSubscription) {
      this._routeSubscription.unsubscribe();
    }
  }

  menuTrigger() {
    this.trigger.openMenu();
  }
  logout(): void {
    this.authService.logout();
  }

  goToCreateTask() {
    const parseUrl = this._router.routerState.snapshot.url.split('/');
    const isPartNamedCategories = ( parseUrl[parseUrl.length - 2].trim() === 'categories' );
    const categoryIdUrl = parseInt(parseUrl[parseUrl.length - 1], 10);
    (isPartNamedCategories && categoryIdUrl)
      ? this._categoryId = categoryIdUrl
      : this._categoryId = null;
    this._router.navigate(
      ['/categories/newTask'],
      {
        queryParams: {
          categoryId:  this._categoryId,
        },
      },

    );
  }
}
