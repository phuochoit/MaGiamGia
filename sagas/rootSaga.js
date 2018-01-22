// import redux-saga
import { call, all, fork  } from "redux-saga/effects";

// import file
import { watchFetchProduct } from "./topPorductSagas";
import { watchFetchOffersInfor } from "./offersInforSaga";

export default function* rootSaga() {
    yield[
        fork(watchFetchProduct),
        fork(watchFetchOffersInfor)
    ];
}