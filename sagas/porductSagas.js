import { FETCH_PRODUCT, FETCH_MOREPRODUCT, FETCH_PRODUCT_SUCCEEDED, FETCH_MORE_PRODUCT_SUCCEEDED, FETCH_PRODUCT_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import { ProductApi } from "./api/productApi";

function* fetchProduct() {
    try {
        const product = yield ProductApi.getProductFromApi();
        yield put({ type: FETCH_PRODUCT_SUCCEEDED, product })
    } catch (error) {
        yield put({ type: FETCH_PRODUCT_FAILED, error });
    }
}

function* fetchMoreProduct(action) {
    try {
        const product = yield ProductApi.getMoreProductFromApi(action.product);
        yield put({ type: FETCH_MORE_PRODUCT_SUCCEEDED, product })
    } catch (error) {
        yield put({ type: FETCH_PRODUCT_FAILED, error });
    }
}


export function* watchFetchProduct() {
    yield takeLatest(FETCH_PRODUCT, fetchProduct);
}

export function* watchFetchMoreProduct() {
    yield takeLatest(FETCH_MOREPRODUCT, fetchMoreProduct);
}