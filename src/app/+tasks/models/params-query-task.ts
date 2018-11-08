interface IParamsQueryTask {
    limit: string|null;
    offset?: string;
    title?: string;
    status?: string;
    categoryId?: string;
    dateStart?: string;
    dateEnd?: string;
    [index: string]: string;
}
