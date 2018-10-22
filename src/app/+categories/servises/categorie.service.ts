import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
// import { environment } from '../../../environments/environment';
import { ICategorie } from '../models/categories';

@Injectable()
export class CategoriesService {
    private urlApi = 'http://localhost:8888/api/v1/categories'; // environment.serverApiUrl();
    constructor(private http: HttpClient) { }
    // create
    sendNewCategorie(categorie: ICategorie) {
        return this.http.post(`${this.urlApi}/`, categorie);
    }
    // get by id
    getCategorie(id: string): Observable<ICategorie> {
        return this.http.get<ICategorie>(`${this.urlApi}/${id}`);
    }
    // get all
    getAllCategories(): Observable<ICategorie[]> {
        return this.http.get<ICategorie[]>(`${this.urlApi}/`);
    }
    // delete
    deleteCategorie(id: string) {
        return this.http.delete(`${this.urlApi}/`);
    }
    // Update
    updateCategorie(id: string, categorie: ICategorie): Observable<ICategorie> {
        return this.http.put<ICategorie>(`${this.urlApi}/${id}`, categorie);
    }
}
