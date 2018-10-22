import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
// import { environment } from '../../../environments/environment';
import { ITask } from '../models/task';

@Injectable()
export class TasksService {
    private urlApi = 'http://localhost:8888/api/v1/tasks'; // environment.serverApiUrl();
    constructor(private http: HttpClient) { }
    // create
    sendNewTask(categorie: ITask) {
        return this.http.post(`${this.urlApi}/`, categorie);
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
    updateTask(id: string, categorie: ITask): Observable<ITask> {
        return this.http.put<ITask>(`${this.urlApi}/${id}`, categorie);
    }
}
