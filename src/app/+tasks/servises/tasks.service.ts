import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { ITask } from '../models/task';

@Injectable()
export class TasksService {
    // private urlApi = 'http://localhost:8888/api/v1/tasks'; // environment.serverApiUrl();
    private urlApi = `${environment.serverApiUrl}tasks`;
    constructor(private http: HttpClient) { }
    // create
    sendNewTask(category: ITask) {
        return this.http.post(`${this.urlApi}/`, category);
    }
    // get by id
    getTask(id: string): Observable<ITask> {
        return this.http.get<ITask>(`${this.urlApi}/${id}`);
    }
    // get all
    getAllTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>(`${this.urlApi}/`);
    }
    // delete
    deleteTask(id: string) {
        return this.http.delete(`${this.urlApi}/`);
    }
    // Update
    updateTask(id: string, category: ITask): Observable<ITask> {
        return this.http.put<ITask>(`${this.urlApi}/${id}`, category);
    }

    getTasksByCategory(categoryId: string): Observable<ITask[]> {
        return this.http.get<ITask[]>(`${this.urlApi}?categoryId=${categoryId}`); // #TODO: check
    }
}
