import { concat, isUndefined, isEmpty } from "lodash";

import { FETCH_PRODUCT, FETCH_MOREPRODUCT, FETCH_PRODUCT_SUCCEEDED, FETCH_MORE_PRODUCT_SUCCEEDED, FETCH_PRODUCT_FAILED  } from "../actions/actionsTypes";

const initialState = {
    error : '',
    currentlySending: false,
    product: [],
    toast: 0
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state, currentlySending: true, toast:0}
        case FETCH_MOREPRODUCT:
            return { ...state, toast: 1 }
        case FETCH_PRODUCT_SUCCEEDED:
            return { ...state, currentlySending: false, product: action.product.data}
        case FETCH_MORE_PRODUCT_SUCCEEDED:
            if (!isUndefined(action.product.data) && !isEmpty(action.product)){
                return { ...state, toast: 2, product: concat(state.product, action.product.data) }
            }
            return { ...state, toast: 2 }
        case FETCH_PRODUCT_FAILED:
            return { ...state, currentlySending: false, error: error}
        default:
            return state;
    }
}

export default productReducer;