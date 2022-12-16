import { call, put, takeLatest } from "redux-saga/effects";
import { Status } from "../../common/constants/status";
import { getCategories, setCategories, setStatus } from "./reducer";
import { getCategoriesRequest } from "./requests";

function* getCategoryHandle() {
    try {
        const { data } = yield call(getCategoriesRequest);
        yield put(setCategories(data));
    } catch (e: any) {
        yield put(setStatus({ status: Status.Failed }));
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_REQUEST` action.
  Allows concurrent increments.
*/
export default function* CategorySagas() {
    yield takeLatest(getCategories.type, getCategoryHandle);
}
