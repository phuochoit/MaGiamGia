import { filter, isEmpty } from "lodash";

import { FETCH_LIST_CATEGORY_FAILED, FETCH_LIST_CATEGORY_SUCCEEDED, FETCH_LIST_CATEGORY, FETCH_TAB_LIST_CATEGORY_SUCCEEDED  } from "../actions/actionsTypes";

import { TTMP, MVB, TBGD, DTMTB, NT, TAT, VDV, MTLTPK, MAMQP, DL, NCDS, SK, SVQT } from "../values/strings";

const initialState = {
    error: '',
    currentlySending: false,
    categoryCouponList: {
        all: [],// all
        coupon: [],// có mã giảm giá
        sale: [] // chương trình khuyến mãi
    }
};

const categoryListDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_CATEGORY:
            return { ...state, currentlySending: true }
        case FETCH_TAB_LIST_CATEGORY_SUCCEEDED:
            switch (action.program) {
                case 'coupon':
                    return {
                        ...state, currentlyTabSending: false, categoryCouponList: {
                            ...state.categoryCouponList,
                            coupon: filter(state.categoryCouponList.all, function (val, key) {
                                return !isEmpty(val.coupons)
                            })
                        }
                    }
                case 'sale':
                    return {
                        ...state, currentlyTabSending: false, categoryCouponList: {
                            ...state.categoryCouponList,
                            sale: filter(state.categoryCouponList.all, function (val, key) {
                                return isEmpty(val.coupons)
                            })
                        }
                    }
                case 'all': {
                    return {
                        ...state, currentlyTabSending: false, categoryCouponList: {
                            ...state.categoryCouponList,
                            coupon: filter(state.categoryCouponList.all, function (val, key) {
                                return !isEmpty(val.coupons)
                            }),
                            sale: filter(state.categoryCouponList.all, function (val, key) {
                                return isEmpty(val.coupons)
                            })
                        }
                    }
                }
            }
            return {
                ...state, currentlyTabSending: false
            }

        case FETCH_LIST_CATEGORY_SUCCEEDED:
            
            return {
                ...state, currentlySending: false, categoryCouponList: {
                    ...state.categoryCouponList,
                    all: action.coupon.data
                }
            }
        case FETCH_LIST_CATEGORY_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default categoryListDetailReducer;