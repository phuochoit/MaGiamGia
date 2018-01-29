// import redux-saga
import { call, all, fork  } from "redux-saga/effects";

// import file
import { watchFetchTopProduct } from "./topPorductSagas";
import { watchFetchOffersInfor } from "./offersInforSaga";
import { watchFetchProduct, watchFetchMoreProduct } from "./porductSagas";
import { watchFetchConnected } from "./connectedSaga";
export default function* rootSaga() {
    yield[
        fork(watchFetchTopProduct),
        fork(watchFetchOffersInfor),
    ];
    yield [
        fork(watchFetchProduct),
        fork(watchFetchMoreProduct),
    ];
    yield [
        fork(watchFetchConnected)
    ]
}