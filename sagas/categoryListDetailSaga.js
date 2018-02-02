import { FETCH_LIST_CATEGORY_FAILED, FETCH_LIST_CATEGORY_SUCCEEDED, FETCH_LIST_CATEGORY, FETCH_TAB_LIST_CATEGORY, FETCH_TAB_LIST_CATEGORY_SUCCEEDED, FETCH_REFRESHING_TAB_COUPON_LIST} from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import { CategoryListDetailApi } from "./api/categoryListDetailApi";


function* fetchCategoryListDetailSaga(action) {
    try {
        const coupon = yield CategoryListDetailApi.getCategoryListDetailFromApi(action.coupon);
        yield put({ type: FETCH_LIST_CATEGORY_SUCCEEDED, coupon: coupon })
    } catch (error) {
        yield put({ type: FETCH_LIST_CATEGORY_FAILED, error });
    }
}

function* FetchTabListCategorySaga(action) {
    try {
        const coupon = yield action;
        yield put({ type: FETCH_TAB_LIST_CATEGORY_SUCCEEDED, coupon, program: action.coupon.program })
    } catch (error) {
        yield put({ type: FETCH_LIST_CATEGORY_FAILED, error });
    }
}

function* FetchRefreShingTabListCategorySaga(action) {
    try {
        const coupon = yield CategoryListDetailApi.getCategoryListDetailFromApi(action.coupon.merchant);
        yield put({ type: FETCH_LIST_CATEGORY_SUCCEEDED, coupon: coupon })
        yield put({ type: FETCH_TAB_LIST_CATEGORY_SUCCEEDED, coupon, program: action.coupon.program })
    } catch (error) {
        yield put({ type: FETCH_LIST_CATEGORY_FAILED, error });
    }
}

export function* watchFetchhRefreShingTabCategoryListDetailSaga() {
    yield takeLatest(FETCH_REFRESHING_TAB_COUPON_LIST, FetchRefreShingTabListCategorySaga);
}

export function* watchFetchTabCategoryListDetailSaga() {
    yield takeLatest(FETCH_TAB_LIST_CATEGORY, FetchTabListCategorySaga);
}

export function* watchFetchCategoryListDetailSaga() {
    yield takeLatest(FETCH_LIST_CATEGORY, fetchCategoryListDetailSaga);
}