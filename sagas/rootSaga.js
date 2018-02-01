// import redux-saga
import { all, fork  } from "redux-saga/effects";

// import file
import { watchFetchTopProduct } from "./topPorductSagas";
import { watchFetchOffersInfor } from "./offersInforSaga";
import { watchFetchProduct, watchFetchMoreProduct } from "./porductSagas";
import { watchFetchConnected } from "./connectedSaga";
import { watchFetchCouponShop } from "./coupoShopSaga";
import { watchFetchCouponList, watchFetchMoreCouponList, watchFetchCouponTabList } from "./couponListSaga";

export default function* rootSaga() {
    yield all([
        fork(watchFetchTopProduct),
        fork(watchFetchOffersInfor),
        fork(watchFetchProduct),
        fork(watchFetchMoreProduct),
        fork(watchFetchConnected),
        fork(watchFetchCouponShop),
        fork(watchFetchCouponList),
        fork(watchFetchMoreCouponList),
        fork(watchFetchCouponTabList)
    ]);
}