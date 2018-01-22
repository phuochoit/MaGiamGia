// import redux-saga
import { call, all } from "redux-saga/effects";

// import file
import { watchFetchProduct } from "./topPorductSagas";

export default function* rootSaga() {
    yield call(watchFetchProduct);
}