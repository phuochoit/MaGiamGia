import { NetInfo } from "react-native";
import { CONNECTIVITY} from "./types";

export function fetchSuccess(temp) {
    return {
        type: CONNECTIVITY,
        isConnected: temp
    };
}

function get_netconnected() {
    NetInfo.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
    );

    return NetInfo.isConnected.fetch().then(response => response);
}

export function checkConnectedDataThunk() {
    return (dispatch) => {
        get_netconnected()
            .then((temp) => {
                dispatch(fetchSuccess(temp));
            })
            .catch((e) => {
                console.log(error)
            });
    }
}

function handleFirstConnectivityChange(connectionInfo) {
    NetInfo.removeEventListener(
        'connectionChange',
        this.handleFirstConnectivityChange
    );
}