import { FETCH_OFFERSINFORNATIONS, FETCH_OFFERSINFORNATIONS_SUCCEEDED, FETCH_FAILED } from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    offers: []
};

const offersInforProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OFFERSINFORNATIONS:
            return { ...state, currentlySending: true }
        case FETCH_OFFERSINFORNATIONS_SUCCEEDED:
            return { ...state, currentlySending: false, offers: action.offers }
        case FETCH_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default offersInforProductReducer;