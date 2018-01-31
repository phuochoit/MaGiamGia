import { combineReducers } from "redux";

import topProductReducer from "./topProductReducer";
import offersInforReducer from "./offersInforReducer";
import productReducer from "./productReducer";
import connectedReducer from "./connectedReducer";
import couponShopReducer from "./couponShopReducer";

const AllReducer = combineReducers({
    isConnected: connectedReducer,
    topProduct: topProductReducer,
    offersInfor: offersInforReducer,
    product: productReducer,
    couponShop: couponShopReducer
});

export default AllReducer;
