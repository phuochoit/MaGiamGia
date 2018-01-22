import { FETCH_OFFERSINFORNATIONS, FETCH_OFFERSINFORNATIONS_SUCCEEDED, FETCH_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import { HomeApi } from "./api/homeApi";

function* fetchOffersInfor() {
    try {
        const offers = yield HomeApi.getOffersInformationsFromApi();
        yield put({ type: FETCH_OFFERSINFORNATIONS_SUCCEEDED, offers: offers })
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchFetchOffersInfor() {
    yield takeLatest(FETCH_OFFERSINFORNATIONS, fetchOffersInfor);
}