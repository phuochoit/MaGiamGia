// import redux-saga
import { call, all } from "redux-saga/effects";

// import file
import { fetchTopProduct } from "./topPorductSagas";

export default function* rootSaga(){
    yield call(fetchTopProduct);
}