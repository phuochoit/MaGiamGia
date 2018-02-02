import { FETCH_CATEGORY, FETCH_CATEGORY_SUCCEEDED, FETCH_CATEGORY_FAILED } from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    category: []
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY:
            return { ...state, currentlySending: true }
        case FETCH_CATEGORY_SUCCEEDED:
            return { ...state, currentlySending: false, category: action.category }
        case FETCH_CATEGORY_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default categoryReducer;