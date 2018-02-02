import { FETCH_LIST_CATEGORY_FAILED, FETCH_LIST_CATEGORY_SUCCEEDED, FETCH_LIST_CATEGORY, FETCH_TAB_LIST_CATEGORY, FETCH_TAB_LIST_CATEGORY_SUCCEEDED, FETCH_REFRESHING_TAB_COUPON_LIST} from "./actionsTypes";


export function FetchListCategoryAction(coupon) {
    return {
        type: FETCH_LIST_CATEGORY,
        coupon: coupon
    }
}

export function FetchTabListCategoryAction(coupon) {
    return {
        type: FETCH_TAB_LIST_CATEGORY,
        coupon: coupon
    }
}

export function FetchRefreShingTabCouponListAction(coupon) {
    return {
        type: FETCH_REFRESHING_TAB_COUPON_LIST,
        coupon: coupon
    }
}

//action send by redux-saga
export function FetchSuccessListCategoryAction(coupon) {
    return {
        type: FETCH_LIST_CATEGORY_SUCCEEDED,
        coupon: coupon
    }
}
export function FetchSuccessTabListCategoryAction(coupon) {
    return {
        type: FETCH_TAB_LIST_CATEGORY_SUCCEEDED,
        coupon: coupon
    }
}

export function FetchSuccessRefreShingTabListCategoryAction(coupon) {
    return {
        type: FETCH_TAB_LIST_CATEGORY_SUCCEEDED,
        coupon: coupon
    }
}
function FetchFaileCategoryAction(error) {
    return {
        type: FETCH_LIST_CATEGORY_FAILED,
        error: error
    }
}