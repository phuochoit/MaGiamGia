import { FETCH_TOPPRODUCT, FETCH_SUCCEEDED, FETCH_FAILED } from "../actions/ActionType";
// import redux-saga
import { put,takeLatest } from "redux-saga/effects";
import { Api } from "./Api";

export function* fetchTopProduct(){
    try {
        const topProduct = yield Api.getTopProductFromApi();
        yield put({ type: FETCH_SUCCEEDED, topProduct: topProduct})
    } catch (error) {
        yield put({ type: FETCH_FAILED, error});
    }
}