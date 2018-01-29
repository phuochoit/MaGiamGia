import { FETCH_CONNECTIVITY, FETCH_SUCCEEDED_CONNECTIVITY} from "./actionsTypes";

export function fetchNetConnectedSuccess(isConnected) {
    return {
        type: FETCH_SUCCEEDED_CONNECTIVITY,
        isConnected: isConnected
    };
}

export function fetchNetConnected() {
    return {
        type: FETCH_CONNECTIVITY
    };
}

