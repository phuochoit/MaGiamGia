import { FETCH_COUPON_LIST_SUCCEEDED, FETCH_COUPON_LIST_FAILED, FETCH_COUPON_LIST_MORE_SUCCEEDED, FETCH_COUPON_LIST_MORE_TAB_SUCCEEDED, FETCH_COUPON_LIST, FETCH_COUPON_LIST_MORE, FETCH_COUPON_LIST_MORE_TAB, FETCH_COUPON_TAB_LIST, FETCH_COUPON_TAB_LIST_SUCCEEDED} from "./actionsTypes";

export function FetchCouponListAction(couponList) {
    return {
        type: FETCH_COUPON_LIST,
        couponList: couponList
    }
}

export function FetchCouponTabListAction(couponList) {
    return {
        type: FETCH_COUPON_TAB_LIST,
        couponList: couponList
    }
}

export function FetchMoreCouponListAction(couponList) {
    return {
        type: FETCH_COUPON_LIST_MORE,
        couponList: couponList
    }
}


export function FetchMoreTabCouponListAction(couponList) {
    return {
        type: FETCH_COUPON_LIST_MORE_TAB,
        couponList: couponList
    }
}



//action send by redux-saga
export function FetchSuccessCouponListAction(couponList) {
    return {
        type: FETCH_COUPON_LIST_SUCCEEDED,
        couponList: couponList
    }
}

export function FetchSuccessCouponTabListAction(couponList) {
    return {
        type: FETCH_COUPON_TAB_LIST_SUCCEEDED,
        couponList: couponList
    }
}

export function FetchSuccessMoreCouponListAction(couponList) {
    return {
        type: FETCH_COUPON_LIST_MORE_SUCCEEDED,
        couponList: couponList
    }
}

export function FetchSuccessMoreTabCouponListAction(couponList) {
    return {
        type: FETCH_COUPON_LIST_MORE_TAB_SUCCEEDED,
        couponList: couponList
    }
}

function FetchCouponListFaileAction(error) {
    return {
        type: FETCH_COUPON_LIST_FAILED,
        error: error
    }
}