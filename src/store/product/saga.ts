import { call, put, takeLatest } from "redux-saga/effects";
import { Status } from "../../common/constants/status";
import {
    getFeaturedProducts,
    getLatestProducts,
    getProducts,
    getTopRatedProducts,
    setFeaturedProducts,
    setLatestProducts,
    setProducts,
    setStatus,
    setTopRatedProducts,
} from "./reducer";
import {
    getFeaturedProductsRequest,
    getLatestProductsRequest,
    getProductsRequest,
    getTopRatedProductsRequest,
} from "./requests";

function* getProductsHandle() {
    try {
        const { data } = yield call(getProductsRequest);
        yield put(setProducts(data));
    } catch (e: any) {
        yield put(setStatus({ status: Status.Failed }));
    }
}

function* getFeaturedProductsHandle() {
    try {
        const { data } = yield call(getFeaturedProductsRequest);
        yield put(setFeaturedProducts(data));
    } catch (e: any) {
        yield put(setStatus({ status: Status.Failed }));
    }
}

function* getLatestProductsHandle() {
    try {
        const { data } = yield call(getLatestProductsRequest);
        yield put(setLatestProducts(data));
    } catch (e: any) {
        yield put(setStatus({ status: Status.Failed }));
    }
}

function* getTopRatedProductsHandle() {
    try {
        const { data } = yield call(getTopRatedProductsRequest);
        yield put(setTopRatedProducts(data));
    } catch (e: any) {
        yield put(setStatus({ status: Status.Failed }));
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_REQUEST` action.
  Allows concurrent increments.
*/
export default function* ProductSagas() {
    yield takeLatest(getProducts.type, getProductsHandle);
    yield takeLatest(getFeaturedProducts.type, getFeaturedProductsHandle);
    yield takeLatest(getLatestProducts.type, getLatestProductsHandle);
    yield takeLatest(getTopRatedProducts.type, getTopRatedProductsHandle);
}
