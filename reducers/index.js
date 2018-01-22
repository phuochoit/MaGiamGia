import { combineReducers } from "redux";

import topProductReducer from "./topProductReducer";

const AllReducer = combineReducers({
    topProduct: topProductReducer,
});

export default AllReducer;
