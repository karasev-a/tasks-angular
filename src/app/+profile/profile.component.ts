import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IUrls } from './models/urls';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
    public urls: IUrls[];
    constructor(private authService: AuthService) { }
    public ngOnInit() {
        if ( this.authService.isAdmin()) {
         this.urls = [
            { name: 'Categories statistics', url: 'categories-statistic'},
         ];
        }
    }
}
