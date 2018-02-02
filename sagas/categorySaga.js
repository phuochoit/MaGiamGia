import { FETCH_CATEGORY, FETCH_CATEGORY_SUCCEEDED, FETCH_CATEGORY_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import { CategoryApi } from "./api/categoryApi";


function* fetchCategorySaga() {
    try {
        const category = yield CategoryApi.getCategoryFromApi();
        console.log('category--', category);
        yield put({ type: FETCH_CATEGORY_SUCCEEDED, category: category })
    } catch (error) {
        yield put({ type: FETCH_CATEGORY_FAILED, error });
    }
}

export function* watchFetchCategorySaga() {
    yield takeLatest(FETCH_CATEGORY, fetchCategorySaga);
}