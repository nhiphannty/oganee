import { call, put, takeLatest } from "redux-saga/effects";
import { Status } from "../../common/constants/status";
import { getProducts, setProducts, setStatus } from "./reducer";
import { getProductsRequest } from "./requests";

function* getProductHandle() {
    try {
        const { data } = yield call(getProductsRequest);
        yield put(setProducts(data));
    } catch (e: any) {
        yield put(setStatus({ status: Status.Failed }));
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_REQUEST` action.
  Allows concurrent increments.
*/
export default function* ProductSagas() {
    yield takeLatest(getProducts.type, getProductHandle);
}
