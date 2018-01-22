import { combineReducers } from "redux";

import topProductReducer from "./topProductReducer";
import offersInforReducer from "./offersInforReducer";

const AllReducer = combineReducers({
    topProduct: topProductReducer,
    offersInfor: offersInforReducer
});

export default AllReducer;
