import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from './services/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    public message: any;

    constructor(private _alertService: AlertService) { }

    ngOnInit() {
        this._subscription = this._alertService.getMessage().subscribe(message => { 
            this.message = message; 
        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}