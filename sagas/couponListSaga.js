import { FETCH_COUPON_LIST, FETCH_COUPON_TAB_LIST, FETCH_TAB_COUPON_LIST, FETCH_COUPON_LIST_SUCCEEDED, FETCH_COUPON_TAB_LIST_SUCCEEDED, FETCH_COUPON_LIST_FAILED, FETCH_TAB_COUPON_LIST_SUCCEEDED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import { CouponListApi } from "./api/couponListApi";

function* fetchCouponListSaga(action) {
    try {
        const couponList = yield CouponListApi.getCouponListFromApi(action.couponList);
        yield put({ type: FETCH_COUPON_LIST_SUCCEEDED, couponList })
    } catch (error) {
        yield put({ type: FETCH_COUPON_LIST_FAILED, error });
    }
}

function* fetchCouponTabListSaga(action) {
    try {
        const couponList = yield action;
        yield put({ type: FETCH_COUPON_TAB_LIST_SUCCEEDED, couponList, program: action.couponList.program })
    } catch (error) {
        yield put({ type: FETCH_COUPON_LIST_FAILED, error });
    }
}

function* fetchTabCouponListSaga(action) {
    try {
        const couponList = yield CouponListApi.getCouponListFromApi(action.couponList.merchant);
        yield put({ type: FETCH_COUPON_LIST_SUCCEEDED, couponList });
        yield put({ type: FETCH_COUPON_TAB_LIST_SUCCEEDED, couponList, program: action.couponList.program })
    } catch (error) {
        yield put({ type: FETCH_COUPON_LIST_FAILED, error });
    }
}


export function* watchFetchCouponList() {
    yield takeLatest(FETCH_COUPON_LIST, fetchCouponListSaga);
}

export function* watchFetchTabCouponTabList() {
    yield takeLatest(FETCH_TAB_COUPON_LIST, fetchTabCouponListSaga);
}

export function* watchFetchCouponTabList() {
    yield takeLatest(FETCH_COUPON_TAB_LIST, fetchCouponTabListSaga);
}

