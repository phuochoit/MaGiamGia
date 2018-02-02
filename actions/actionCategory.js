import { FETCH_CATEGORY, FETCH_CATEGORY_SUCCEEDED, FETCH_CATEGORY_FAILED } from "./actionsTypes";

export function FetchCategoryAction(category) {
    return {
        type: FETCH_CATEGORY,
        category: category
    }
}

//action send by redux-saga
export function FetchSuccessCategoryAction(category) {
    return {
        type: FETCH_CATEGORY_SUCCEEDED,
        category: category
    }
}

function FetchFaileCategoryAction(error) {
    return {
        type: FETCH_CATEGORY_FAILED,
        error: error
    }
}