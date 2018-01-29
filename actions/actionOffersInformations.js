import { FETCH_OFFERSINFORNATIONS, FETCH_OFFERSINFORNATIONS_SUCCEEDED, FETCH_FAILED } from "./actionsTypes";

export function FetchOffersInforAction(offers) {
    return {
        type: FETCH_OFFERSINFORNATIONS,
        offers: offers
    }
}

//action send by redux-saga
export function FetchSuccessOffersInforAction(offers) {
    return {
        type: FETCH_OFFERSINFORNATIONS_SUCCEEDED,
        offers: offers
    }
}

function FetchFaileAction(error) {
    return {
        type: FETCH_FAILED,
        error: error
    }
}