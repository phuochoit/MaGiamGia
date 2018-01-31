import { FETCH_COUPON_SHOP, FETCH_COUPON_SHOP_SUCCEEDED, FETCH_COUPON_SHOP_FAILED } from "./actionsTypes";

export function FetchCouponShopAction(couponShop) {
    return {
        type: FETCH_COUPON_SHOP,
        couponShop: couponShop
    }
}

//action send by redux-saga
export function FetchSuccessCouponShopAction(couponShop) {
    return {
        type: FETCH_COUPON_SHOP_SUCCEEDED,
        couponShop: couponShop
    }
}

function FetchFaileCouponShopAction(error) {
    return {
        type: FETCH_COUPON_SHOP_FAILED,
        error: error
    }
}