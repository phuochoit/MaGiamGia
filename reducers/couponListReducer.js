import { filter , isEmpty} from "lodash";

import { FETCH_COUPON_LIST, FETCH_COUPON_TAB_LIST, FETCH_TAB_COUPON_LIST, FETCH_COUPON_LIST_SUCCEEDED, FETCH_COUPON_TAB_LIST_SUCCEEDED, FETCH_COUPON_LIST_FAILED, FETCH_TAB_COUPON_LIST_SUCCEEDED } from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    currentlyTabSending: false,
    couponList: {
        all: [],// all
        coupon:[],// có mã giảm giá
        sale: [] // chương trình khuyến mãi
    }
};

const couponListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUPON_LIST:
            return { ...state, currentlySending: true }
        case FETCH_COUPON_TAB_LIST:
            return { ...state, currentlyTabSending: true }
        case FETCH_COUPON_TAB_LIST_SUCCEEDED:
            switch (action.program) {
                case 'coupon':
                    return {
                        ...state, currentlyTabSending: false, couponList: {
                            ...state.couponList,
                            coupon: filter(state.couponList.all, function (val, key) {
                                return !isEmpty(val.coupons)
                            })
                        }
                    } 
                case 'sale':
                    return {
                        ...state, currentlyTabSending: false, couponList: {
                            ...state.couponList,
                            sale: filter(state.couponList.all, function (val, key) {
                                return isEmpty(val.coupons)
                            })
                        }
                    }
                case 'all':{
                    return {
                        ...state, currentlyTabSending: false, couponList: {
                            ...state.couponList,
                            coupon: filter(state.couponList.all, function (val, key) {
                                return !isEmpty(val.coupons)
                            }),
                            sale: filter(state.couponList.all, function (val, key) {
                                return isEmpty(val.coupons)
                            })
                        }
                    }
                }
            }
            return {
                ...state, currentlyTabSending: false
            }
            
        case FETCH_COUPON_LIST_SUCCEEDED:
            return {
                ...state, currentlySending: false, couponList: {
                    ...state.couponList,
                    all: action.couponList.data
                }
            }
        case FETCH_COUPON_LIST_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default couponListReducer;