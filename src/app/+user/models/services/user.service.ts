import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../environments/environment';
import { IUser } from '../user.model';

@Injectable()
export class UserService {
    private urlApi = `${environment.serverApiUrl}users`;

    constructor(private http: HttpClient) { }

    // create
    public sendNewUser(user: IUser) {
        return this.http.post(`${this.urlApi}/`, user);
    }
    // get current
    public getUser(): Observable<IUser> {
        let params = new HttpParams();
        params = params.append( 'current', 'true' );

        return this.http.get<IUser>(`${this.urlApi}`, {params});
    }
    public updateUser(user: IUser): Observable<IUser> {
        return this.http.put<IUser>(`${this.urlApi}`, user);
    }
}