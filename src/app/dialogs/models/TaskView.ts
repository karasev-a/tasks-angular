import { ITask } from '../../+tasks/models/task';

export interface ITaskView extends ITask {
    Category: string;
    firstLastName: string;
}
