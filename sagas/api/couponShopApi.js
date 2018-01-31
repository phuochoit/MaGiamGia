import { strAccept, strAuthorization } from "../../values/strings";
import shops from "../../values/shop";

function* getCouponShopFromApi() {
    const couponShop = yield shops;
    return couponShop;
}

export const CouponShopApi = {
    getCouponShopFromApi
}