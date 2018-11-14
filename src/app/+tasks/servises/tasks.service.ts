import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { ITask } from '../models/task';

@Injectable()
export class TasksService {
    private urlApi = `${environment.serverApiUrl}tasks`;
    private limit = '2';
    constructor(private http: HttpClient) { }

    // create
    public sendNewTask(category: ITask) {
        return this.http.post(`${this.urlApi}/`, category);
    }
    // get by id
    public getTask(id: number): Observable<ITask> {
        return this.http.get<ITask>(`${this.urlApi}/${id}`);
    }

    // get all
    public getAllTasks(params?: {
        [param: string]: string | string[];
    }): Observable<ITask[]> {
        const queryStr = `${this.urlApi}`;
        let allParams = new HttpParams({
            fromObject: params,
        });
        allParams = allParams.append('limit', `${this.limit}`);

        return this.http.get<ITask[]>(queryStr, { params: allParams });
    }

    getAllTasksOfUser(params?: IParamsQueryTask): Observable<ITask[]> {
        const queryStr = `${this.urlApi}/myTasks`;
        const allParams = new HttpParams({
            fromObject: params,
        });

        return this.http.get<ITask[]>(queryStr, { params: allParams });
    }
    // delete
    deleteTask(id: string) {
        return this.http.delete(`${this.urlApi}/${id}`);
    }
    // Update
    public updateTask(id: number, task: ITask): Observable<ITask> {
        return this.http.put<ITask>(`${this.urlApi}/${id}`, task);
    }

    public createTask(task: ITask): Observable<ITask> {
        return this.http.post<ITask>(`${this.urlApi}`, task);
    }

    public getTasksOfUser(): Observable<ITask[]> {
        return this.http.get<ITask[]>(`${this.urlApi}/tasks`);
    }

    public subscribeToTask(id: string): Observable<ITask> {
        return this.http.post(`${this.urlApi}/${id}/subscription`, {});
    }

    public getCategoriesStatistic(): Observable<object> {
        return this.http.get(`${this.urlApi}/statistics`);
    }

}
