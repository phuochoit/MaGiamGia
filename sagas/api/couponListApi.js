import { strAccept, strAuthorization } from "../../values/strings";
const urlCouponList = 'https://api.accesstrade.vn/v1/offers_informations?status=1&merchant=';


function* getCouponListFromApi(merchant) {
    let url = urlCouponList + merchant;
    const respone = yield fetch(url, {
        method: 'GET',
        headers: {
            Accept: strAccept,
            'Content-Type': strAccept + '; charset=utf-8',
            'Authorization': strAuthorization
        }
    });
    const couponList = yield respone.status === 200 ? JSON.parse(respone._bodyText) : [];
    return couponList;
}

function* getCouponTabListFromApi(action) {
    let url = urlCouponList + action.merchant + '&categories=' + action.category;    
    const respone = yield fetch(url, {
        method: 'GET',
        headers: {
            Accept: strAccept,
            'Content-Type': strAccept + '; charset=utf-8',
            'Authorization': strAuthorization
        }
    });
    const couponList = yield respone.status === 200 ? JSON.parse(respone._bodyText) : [];
    return couponList;
}

export const CouponListApi = {
    getCouponListFromApi,
    getCouponTabListFromApi
}