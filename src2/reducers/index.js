import { combineReducers } from "redux";

import NavigatorsReducer from "./NavigatorsReducer";
import topProductReducer from "./TopProductReducer";

const AllReducer = combineReducers({
    nav: NavigatorsReducer,
    topProduct: topProductReducer,
});

export default AllReducer;