import { FETCH_COUPON_SHOP, FETCH_COUPON_SHOP_SUCCEEDED, FETCH_COUPON_SHOP_FAILED} from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import { CouponShopApi } from "./api/couponShopApi";

function* fetchCouponShop() {
    try {
        const couponShop = yield CouponShopApi.getCouponShopFromApi();
        yield put({ type: FETCH_COUPON_SHOP_SUCCEEDED, couponShop: couponShop })
    } catch (error) {
        yield put({ type: FETCH_COUPON_SHOP_FAILED, error });
    }
}

export function* watchFetchCouponShop() {
    yield takeLatest(FETCH_COUPON_SHOP, fetchCouponShop);
}