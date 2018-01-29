import { NetInfo } from "react-native";

import { FETCH_CONNECTIVITY, FETCH_SUCCEEDED_CONNECTIVITY } from "../actions/actionsTypes";

// import redux-saga
import { put, takeLatest, call} from "redux-saga/effects";

function* fetchConnected() {
    try {
        const isConnected = yield call(get_netconnected);
        yield put({ type: FETCH_SUCCEEDED_CONNECTIVITY, isConnected })
    } catch (error) {
        console.log(error)
    }
}

function get_netconnected() {
    NetInfo.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
    );
    return NetInfo.isConnected.fetch().then(response => response);
}

function handleFirstConnectivityChange(connectionInfo) {
    NetInfo.removeEventListener(
        'connectionChange',
        this.handleFirstConnectivityChange
    );
}

export function* watchFetchConnected() {
    yield takeLatest(FETCH_CONNECTIVITY, fetchConnected);
}

