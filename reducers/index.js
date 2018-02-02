import { combineReducers } from "redux";

import topProductReducer from "./topProductReducer";
import offersInforReducer from "./offersInforReducer";
import productReducer from "./productReducer";
import connectedReducer from "./connectedReducer";
import couponShopReducer from "./couponShopReducer";
import couponListReducer from "./couponListReducer";
import categoryReducer from "./categoryReducer";

const AllReducer = combineReducers({
    isConnected: connectedReducer,
    topProduct: topProductReducer,
    offersInfor: offersInforReducer,
    product: productReducer,
    couponShop: couponShopReducer,
    couponList: couponListReducer,
    category: categoryReducer,
});

export default AllReducer;
