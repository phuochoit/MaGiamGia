import { combineReducers } from "redux";

import topProductReducer from "./topProductReducer";
import offersInforReducer from "./offersInforReducer";
import productReducer from "./productReducer";

const AllReducer = combineReducers({
    topProduct: topProductReducer,
    offersInfor: offersInforReducer,
    product: productReducer
});

export default AllReducer;
