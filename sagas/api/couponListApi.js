import { strAccept, strAuthorization } from "../../values/strings";
const urlCouponList = 'https://api.accesstrade.vn/v1/offers_informations?status=1&merchant=';
// const CouponListParmas = '&status_discount=1&limit=50&offset=';

// https://api.accesstrade.vn/v1/offers_informations?status=1&merchant='lazada'
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

// function* getMoreCouponListFromApi(action) {
//     let url = urlCouponList + 'campaign=' + action.merchant + CouponListParmas + action.page;

//     const respone = yield fetch(url, {
//         method: 'GET',
//         headers: {
//             Accept: strAccept,
//             'Content-Type': strAccept + '; charset=utf-8',
//             'Authorization': strAuthorization
//         }
//     });
//     const offers = yield respone.status === 200 ? JSON.parse(respone._bodyText) : [];
//     return offers;
// }

export const CouponListApi = {
    getCouponListFromApi,
    // getMoreCouponListFromApi
}