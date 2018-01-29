// import redux-saga
import { call, all, fork  } from "redux-saga/effects";

// import file
import { watchFetchTopProduct } from "./topPorductSagas";
import { watchFetchOffersInfor } from "./offersInforSaga";
import { watchFetchProduct, watchFetchMoreProduct } from "./porductSagas";

export default function* rootSaga() {
    yield[
        fork(watchFetchTopProduct),
        fork(watchFetchOffersInfor),
    ];
    yield [
        fork(watchFetchProduct),
        fork(watchFetchMoreProduct),
    ]
}