export interface IQueryProduct {
    page: number;
    max: number;
    search?: string;
    orderBy?: string;
    colors?: string[];
    sizes?: string[];
    categoryIds?: string[];
}
