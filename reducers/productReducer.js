import { concat } from "lodash";

import { FETCH_PRODUCT, FETCH_MOREPRODUCT, FETCH_PRODUCT_SUCCEEDED, FETCH_MORE_PRODUCT_SUCCEEDED, FETCH_PRODUCT_FAILED  } from "../actions/actionsTypes";

const initialState = {
    error : '',
    currentlySending: false,
    product: [],
};

const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state, currentlySending: true }
        case FETCH_PRODUCT_SUCCEEDED:
            return { ...state, currentlySending: false, product: action.product.data}
        case FETCH_MORE_PRODUCT_SUCCEEDED:
            return { ...state, currentlySending: false, product: concat(state.product, action.product.data)}
        case FETCH_PRODUCT_FAILED:
            return { ...state, currentlySending: false, error: error}
        default:
            return state;
    }
}

export default productReducer;