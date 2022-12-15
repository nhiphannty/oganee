import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { fetchCategoryFailure, fetchCategorySuccess } from "./actions";
import { CATEGORY } from "../../common/constants/actionTypes";
import { ICategory } from "../../common/interfaces/ICategory";

const getCategories = () => axios.get<ICategory[]>("http://localhost:5000/categories");

function* fetchCategorySagaHandle() {
    try {
        const response: AxiosResponse<ICategory[]> = yield call(getCategories);
        yield put(
            fetchCategorySuccess({
                categories: response.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchCategoryFailure({
                error: e.message,
            })
        );
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_REQUEST` action.
  Allows concurrent increments.
*/
export default function* categorySaga() {
    yield takeEvery(CATEGORY.FETCH_REQUEST, fetchCategorySagaHandle);
}
