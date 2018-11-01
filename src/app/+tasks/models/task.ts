export interface ITask {
    id?: string;
    title?: string;
    people?: number;
    price?: number;
    description?: string;
    date?: Date;
    subscrebedPeople?: number;
    status?: string;
    userId?: number; // who create
    categoryId?: number;
    createdAt?: Date;
  }
