import { FETCH_SUCCEEDED_CONNECTIVITY } from "../actions/actionsTypes";

const DEFAULT_STATE = {
    isConnected: true
};

const connectedReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === FETCH_SUCCEEDED_CONNECTIVITY) {
        return {
            isConnected: action.isConnected
        }
    }
    return state;
}

export default connectedReducer;