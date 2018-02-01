import { FETCH_COUPON_LIST_SUCCEEDED, FETCH_COUPON_LIST_FAILED, FETCH_COUPON_LIST_MORE_SUCCEEDED, FETCH_COUPON_LIST_MORE_TAB_SUCCEEDED, FETCH_COUPON_LIST, FETCH_COUPON_LIST_MORE, FETCH_COUPON_LIST_MORE_TAB, FETCH_COUPON_TAB_LIST_SUCCEEDED } from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    couponList: {
        all: [],// all
        dtmtb:[],// dien thoai may tinh bang
    }
};

const couponListReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_COUPON_LIST:
            return { ...state, currentlySending: true }
        case FETCH_COUPON_TAB_LIST_SUCCEEDED:
            console.log('action', action);
            console.log('state', state);
            return { ...state, currentlySending: true }
        case FETCH_COUPON_LIST_SUCCEEDED:
            return {
                ...state, currentlySending: false, couponList: {
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