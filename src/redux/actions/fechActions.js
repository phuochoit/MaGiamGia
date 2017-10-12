import { FETCH_SUCCESS, START_FETCH, FETCH_ERROR} from "./types";
import getData from "../../api";

export function startFetchData(){
    return {
        type: START_FETCH
    }
}

export function fetchSuccess(data, type){
    switch (type){
        case "Home":
            return {
                type: FETCH_SUCCESS,
                payload: data,
                page: "Home"
            }
            break;
        case "News":
            return {
                type: FETCH_SUCCESS,
                payload: data,
                page: "News"
            }
            break;
    }
    
}

export function fetchError() {
    return {
        type: FETCH_ERROR
    }
}

export function fetchDataThunk(url,type) {
    return (dispatch) => {
        dispatch(startFetchData());
        getData(url)
            .then((temp) => {
                dispatch(fetchSuccess(temp, type));
            })
            .catch((e) => {
                dispatch(fetchError());
            });
    };
}