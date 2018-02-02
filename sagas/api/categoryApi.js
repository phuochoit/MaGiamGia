import { strAccept, strAuthorization } from "../../values/strings";
import category from "../../values/category";

function* getCategoryFromApi() {
    const getCategory = yield category;
    return getCategory;
}

export const CategoryApi = {
    getCategoryFromApi
}