import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CategoriesService {
    private urlApi = 'http://localhost:8888/api/v1/categories'; // environment.serverApiUrl();
    constructor(private http: HttpClient) { }
    // create
    sendNewCategory(category: ICategory) {
        return this.http.post(`${this.urlApi}/`, category);
    }
    // get by id
    getCategory(id: string): Observable<ICategory> {
        return this.http.get<ICategory>(`${this.urlApi}/${id}`);
    }
    // get all
    getAllCategories(): Observable<ICategory[]> {
        return this.http.get<ICategory[]>(`${this.urlApi}/`);
    }
    // delete
    deleteCategory(id: string) {
        return this.http.delete(`${this.urlApi}/`);
    }
    // Update
    updateCategory(id: string, category: ICategory): Observable<ICategory> {
        return this.http.put<ICategory>(`${this.urlApi}/${id}`, category);
    }

    getCategoryOfManager() {
        return this.http.get(`${this.urlApi}/managerTasks`);
    }
}
