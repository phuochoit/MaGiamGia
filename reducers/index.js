import { combineReducers } from "redux";

import topProductReducer from "./topProductReducer";
import offersInforReducer from "./offersInforReducer";
import productReducer from "./productReducer";
import connectedReducer from "./connectedReducer";

const AllReducer = combineReducers({
    isConnected: connectedReducer,
    topProduct: topProductReducer,
    offersInfor: offersInforReducer,
    product: productReducer
});

export default AllReducer;
