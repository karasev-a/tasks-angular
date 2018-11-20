import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs/index';
import { IAlert } from '../alert';

@Injectable({
    providedIn: 'root',
})
export class AlertService {
    private _subject = new Subject<IAlert>();
    private _keepAfterNavigationChange = false;

    constructor(private _router: Router) {
        // clear alert message on route change
        // _router.events.subscribe(event => {
        //     if (event instanceof NavigationStart) {
        //         if (this._keepAfterNavigationChange) {
        //             // only keep for a single location change
        //             this._keepAfterNavigationChange = false;
        //         } else {
        //             // clear alert
        //             this._subject.next();
        //         }
        //     }
        // });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._subject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterNavigationChange = false) {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._subject.next({ type: 'error', text: message });
    }

    getMessage(): Observable<IAlert> {
        return this._subject.asObservable();
    }
}
