import { FETCH_SUCCESS, START_FETCH, FETCH_FAIL } from "../actions/types";

const  DEFAULT_STATE = {
    home:[],
    news: []
}
export const DataAPIHOME = (state = DEFAULT_STATE, action) => {
    if (action.type === FETCH_SUCCESS && action.page == "Home"){
        return {
            home: action.payload
        }
        
    }
    return state;
}

export const DataAPINEWS = (state = DEFAULT_STATE, action) => {
    if (action.type === FETCH_SUCCESS && action.page == "News") {
        return {
            news: action.payload
        }

    }
    return state;
}