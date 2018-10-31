import { Component, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, ActivatedRoute } from '@angular/router';

import '../assets/css/styles.css';
import { AuthService } from './auth/auth.service';
// import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  private isLoggedIn$: boolean;

  constructor(private authService: AuthService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isAuthenticated;
  }
  menuTrigger() {
    this.trigger.openMenu();
  }
  logout(): void {
    this.authService.logout();
  }

  goToCreateTask() {
    this._router.navigate(
      ['/categories/newTask'],
    );
  }
}
