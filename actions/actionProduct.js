import { FETCH_PRODUCT, FETCH_MOREPRODUCT, FETCH_PRODUCT_SUCCEEDED, FETCH_MORE_PRODUCT_SUCCEEDED, FETCH_PRODUCT_FAILED } from "./actionsTypes";

export function FetchProductAction(product) {
    return {
        type: FETCH_PRODUCT,
        product: product
    }
}

export function FetchMoreProductAction(product) {
    return {
        type: FETCH_MOREPRODUCT,
        product: product
    }
}


//action send by redux-saga
export function FetchSuccessProductAction(product) {
    return {
        type: FETCH_PRODUCT_SUCCEEDED,
        product: product
    }
}

export function FetchSuccessMoreProductAction(product) {
    return {
        type: FETCH_MORE_PRODUCT_SUCCEEDED,
        product: product
    }
}

function FetchFaileProductAction(error) {
    return {
        type: FETCH_PRODUCT_FAILED,
        error: error
    }
}