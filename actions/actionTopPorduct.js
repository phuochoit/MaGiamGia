import { FETCH_TOPPRODUCT, FETCH_SUCCEEDED, FETCH_FAILED } from "./actionsTypes";

export function FetchTopProductAction(topProduct) {
    return {
        type: FETCH_TOPPRODUCT,
        topProduct: topProduct
    }
}

//action send by redux-saga
export function FetchSuccessTopProductAction(topProduct) {
    return {
        type: FETCH_SUCCEEDED,
        topProduct: topProduct
    }
}

function FetchFaileAction(error) {
    return {
        type: FETCH_FAILED,
        error: error
    }
}