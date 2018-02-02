import { strAccept, strAuthorization } from "../../values/strings";
const urlCategoryList = 'https://api.accesstrade.vn/v1/offers_informations?status=1&categories=';


function* getCategoryListDetailFromApi(action) {
    let url = urlCategoryList + action;
    const respone = yield fetch(url, {
        method: 'GET',
        headers: {
            Accept: strAccept,
            'Content-Type': strAccept + '; charset=utf-8',
            'Authorization': strAuthorization
        }
    });
    const categoryList = yield respone.status === 200 ? JSON.parse(respone._bodyText) : [];
    return categoryList;
}

export const CategoryListDetailApi = {
    getCategoryListDetailFromApi
}