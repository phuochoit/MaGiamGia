import { strAccept, strAuthorization } from "../../values/strings";
const urlTopProduct = 'https://api.accesstrade.vn/v1/top_products';
const urlOffersInformations = 'https://api.accesstrade.vn/v1/offers_informations?scope=expiring&coupon=1&status=1';

function* getTopProductFromApi() {
    const respone = yield fetch(urlTopProduct, {
        method: 'GET',
        headers: {
            Accept: strAccept,
            'Content-Type': strAccept +'; charset=utf-8',
            'Authorization': strAuthorization
        }
    });
    const topProduct = yield  respone.status === 200 ? JSON.parse(respone._bodyText) : [];
    return topProduct;
}

function* getOffersInformationsFromApi() {
    const respone = yield fetch(urlOffersInformations, {
        method: 'GET',
        headers: {
            Accept: strAccept,
            'Content-Type': strAccept + '; charset=utf-8',
            'Authorization': strAuthorization
        }
    });
    const offers = yield respone.status === 200 ? JSON.parse(respone._bodyText) : [];
    return offers;
}

export const HomeApi = {
    getTopProductFromApi,
    getOffersInformationsFromApi
}