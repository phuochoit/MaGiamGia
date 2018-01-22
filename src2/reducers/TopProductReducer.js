import { FETCH_TOPPRODUCT, FETCH_SUCCEEDED, FETCH_FAILED } from "../actions/ActionType";

const topProductReducer = (Product = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.topProduct;
        case FETCH_FAILED:
            return [];
        default:
            return Product;
    }
}

export default topProductReducer;