import { FETCH_COUPON_SHOP, FETCH_COUPON_SHOP_SUCCEEDED, FETCH_COUPON_SHOP_FAILED} from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    couponShop: []
};

const couponShopReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUPON_SHOP:
            return { ...state, currentlySending: true }
        case FETCH_COUPON_SHOP_SUCCEEDED:
            return { ...state, currentlySending: false, couponShop: action.couponShop }
        case FETCH_COUPON_SHOP_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default couponShopReducer;