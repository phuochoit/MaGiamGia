import { combineReducers } from "redux";

import topProductReducer from "./topProductReducer";
import offersInforReducer from "./offersInforReducer";
import productReducer from "./productReducer";
import connectedReducer from "./connectedReducer";
import couponShopReducer from "./couponShopReducer";
import couponListReducer from "./couponListReducer";
import categoryReducer from "./categoryReducer";
import categoryListDetailReducer from "./categoryListDetailReducer";
const AllReducer = combineReducers({
    isConnected: connectedReducer,
    topProduct: topProductReducer,
    offersInfor: offersInforReducer,
    product: productReducer,
    couponShop: couponShopReducer,
    couponList: couponListReducer,
    category: categoryReducer,
    categoryListDetail: categoryListDetailReducer,
});

export default AllReducer;
