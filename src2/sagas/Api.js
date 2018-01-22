const urlTopProduct = 'https://api.accesstrade.vn/v1/top_products';

function* getTopProductFromApi(){
    const respone = yield fetch(urlTopProduct, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token iDKOG4khkBOkyMHYS7Y3jFS09Yy4WYX5'
        },
        body: ''
    });
    const topProduct = yield typeof respone.data ? JSON.parse(respone.data) : [];
    return topProduct;
}

export const Api = {
    getTopProductFromApi
}