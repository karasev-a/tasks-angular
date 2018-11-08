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

export enum Statuses {
  OnReview = 1,
  Open = 2,
  Pending = 3,
  Done = 4,
  Decline = 5,
}
