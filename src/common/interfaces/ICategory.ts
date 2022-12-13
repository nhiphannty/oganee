import { CATEGORY } from "../constants/actionTypes";

export interface ICategory {
    id: string;
    name: string;
}

export interface CategoryState {
    pending: boolean;
    categories: ICategory[];
    error: string | null;
}

export interface FetchCategorySuccessPayload {
    categories: ICategory[];
}

export interface FetchCategoryFailurePayload {
    error: string;
}

export interface FetchCategoryRequest {
    type: CATEGORY.FETCH_REQUEST;
}

export interface FetchCategorySuccess {
    type: CATEGORY.FETCH_SUCCESS;
    payload: FetchCategorySuccessPayload;
}

export interface FetchCategoryFailure {
    type: CATEGORY.FETCH_FAILURE;
    payload: FetchCategoryFailurePayload;
}

export type CategoryActions = FetchCategoryRequest | FetchCategorySuccess | FetchCategoryFailure;
