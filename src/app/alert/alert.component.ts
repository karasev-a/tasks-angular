import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/index';

import { AlertService } from './services/alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
})

export class AlertComponent implements OnInit, OnDestroy {
    public message: string;
    private _subscription: Subscription;
    constructor(private _alertService: AlertService, public snackBar: MatSnackBar) { }

    ngOnInit() {
        this._subscription = this._alertService.getMessage().subscribe( message => {
            this.message = message;
            this.snackBar.open(message.text, '', {
                duration: 2000,
            });
        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
