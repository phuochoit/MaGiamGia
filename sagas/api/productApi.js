import { strAccept, strAuthorization } from "../../values/strings";
const urlProduct = 'https://api.accesstrade.vn/v1/datafeeds?campaign=lazada&status_discount=1&limit=10&offset=1';
const urlMoreProduct = 'https://api.accesstrade.vn/v1/datafeeds?campaign=lazada&status_discount=1&limit=10&offset=';

function* getProductFromApi() {
    const respone = yield fetch(urlProduct, {
        method: 'GET',
        headers: {
            Accept: strAccept,
            'Content-Type': strAccept + '; charset=utf-8',
            'Authorization': strAuthorization
        }
    });
    const product = yield respone.status === 200 ? JSON.parse(respone._bodyText) : [];
    return product;
}

function* getMoreProductFromApi(page) {
    const respone = yield fetch(urlMoreProduct + page, {
        method: 'GET',
        headers: {
            Accept: strAccept,
            'Content-Type': strAccept + '; charset=utf-8',
            'Authorization': strAuthorization
        }
    });
    const moreProduct = yield respone.status === 200 ? JSON.parse(respone._bodyText) : [];
    return moreProduct;
}

export const ProductApi = {
    getProductFromApi,
    getMoreProductFromApi
}