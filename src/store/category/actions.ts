import { CATEGORY } from "../../common/constants/actionTypes";
import {
    FetchCategoryRequest,
    FetchCategorySuccess,
    FetchCategorySuccessPayload,
    FetchCategoryFailure,
    FetchCategoryFailurePayload,
} from "../../common/interfaces/ICategory";

export const fetchCategoryRequest = (): FetchCategoryRequest => ({
    type: CATEGORY.FETCH_REQUEST,
});

export const fetchCategorySuccess = (
    payload: FetchCategorySuccessPayload
): FetchCategorySuccess => ({
    type: CATEGORY.FETCH_SUCCESS,
    payload,
});

export const fetchCategoryFailure = (
    payload: FetchCategoryFailurePayload
): FetchCategoryFailure => ({
    type: CATEGORY.FETCH_FAILURE,
    payload,
});
