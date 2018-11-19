import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
    public urls: { name: string, url: string }[];
    constructor(private authService: AuthService) { }
    ngOnInit() {
        if ( this.authService.isAdmin()) {
         this.urls = [
            { name: 'Categories statistics', url: 'categories-statistic'},
         ];
        }
    }
}
