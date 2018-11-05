import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { ITask } from '../models/task';

@Injectable()
export class TasksService {
    // private urlApi = 'http://localhost:8888/api/v1/tasks'; // environment.serverApiUrl();
    private urlApi = `${environment.serverApiUrl}tasks`;
    private limit = '2';
    constructor(private http: HttpClient) { }
    // create
    sendNewTask(category: ITask) {
        return this.http.post(`${this.urlApi}/`, category);
    }
    // get by id
    getTask(id: number): Observable<ITask> {
        return this.http.get<ITask>(`${this.urlApi}/${id}`);
    }
    // get all
    getAllTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>(`${this.urlApi}/`);
    }

    getAllTasksOfUser(params?: {[param: string]: string | string[]}): Observable<ITask[]> {
        const queryStr = `${this.urlApi}/myTasks`;
        let allParams = new HttpParams({
            fromObject: params,
        });
        allParams = allParams.append('limit', `${this.limit}`);

        return this.http.get<ITask[]>(queryStr, { params: allParams });

       //  return this.http.get<ITask[]>(`${this.urlApi}/myTasks`);
    }
    // delete
    deleteTask(id: string) {
        return this.http.delete(`${this.urlApi}/${id}`);
    }
    // Update
    updateTask(id: number, task: ITask): Observable<ITask> {
        return this.http.put<ITask>(`${this.urlApi}/${id}`, task);
    }

    public createTask(task: ITask): Observable<ITask> {
        return this.http.post<ITask>(`${this.urlApi}`, task);
    }

    getTasksByCategory(categoryId: string): Observable<ITask[]> {
        if (categoryId) {
            return this.http.get<ITask[]>(`${this.urlApi}?categoryId=${categoryId}`); // #TODO: check
        } else {
            return this.http.get<ITask[]>(`${this.urlApi}`); // #TODO: check
        }
    }

    public getTasksOfUser(): Observable<ITask[]> {
        return this.http.get<ITask[]>(`${this.urlApi}/tasks`);
    }

}
