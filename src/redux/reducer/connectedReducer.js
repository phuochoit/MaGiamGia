import { CONNECTIVITY } from "../actions/types";

const DEFAULT_STATE = {
    isConnected: true
};


export const connectedReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === CONNECTIVITY) {
        return {
            isConnected: action.isConnected
        }
    }
    return state;
}