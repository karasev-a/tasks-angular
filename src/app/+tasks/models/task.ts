export interface ITask {
  id?: number;
  title?: string;
  people?: number;
  price?: number;
  description?: string;
  date?: Date;
  subscrebedPeople?: number;
  status?: number;
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

export enum Roles {
  Admin = 1,
  Manager = 2,
  User = 3,
}
