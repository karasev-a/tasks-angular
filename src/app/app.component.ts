import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, from } from 'rxjs';

import '../assets/css/styles.css';
import { AuthService } from './auth/auth.service';
// import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  private isLoggedIn$: boolean;
  private _routeSubscription: Subscription;
  private _categoryId: number;

  constructor(private authService: AuthService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isAuthenticated;
    this._routeSubscription = this._route.params.subscribe(params => {
      this._categoryId = params['categoryId'];
    });
  }
  menuTrigger() {
    this.trigger.openMenu();
  }
  logout(): void {
    this.authService.logout();
  }

  public ngOnDestroy() {
    if (this._routeSubscription) {
      this._routeSubscription.unsubscribe();
    }
  }

  goToCreateTask() {
    this._router.navigate(
      ['/categories/newTask'],
      // {
      //   queryParams: {
      //     categotyId: this._categoryId,
      //   },
      // },
    );
  }
}
