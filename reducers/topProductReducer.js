import { FETCH_TOPPRODUCT, FETCH_SUCCEEDED, FETCH_FAILED } from "../actions/actionsTypes";

const initialState = {
    error : '',
    currentlySending: false,
    product: []
};

const topProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOPPRODUCT:
            return { ...state, currentlySending: true }
        case FETCH_SUCCEEDED:
            return { ...state, currentlySending: false, product: action.topProduct }
        case FETCH_FAILED:
            return { ...state, currentlySending: false, error: error}
        default:
            return state;
    }
}

export default topProductReducer;