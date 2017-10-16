import { get, post } from "axios";

/**
 * get data by url
 * @export
 * @param {any} URL 
 * @returns 
 */
export function getData(URL) {
    return get(URL)
        .then(response => response.data)
        .catch(error => console.log(error));
}

/**
 * get data by params
 * @export
 * @param {any} URL 
 * @param {any} params 
 * @returns 
 */
export function getDataByParams(URL, params) {
    return get(URL, {  params })
        .then(response => response.data)
        .catch(error => error);
}

/**
 * post data  * 
 * @export
 * @param {any} URL 
 * @param {any} params
 * @returns 
 */
 export function postData(URL, params) {
    return post(URL, { params })
        .then(response => response.data)
        .catch(error => error);
}