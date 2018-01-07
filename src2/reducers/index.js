import { combineReducers } from "redux";

import NavigatorsReducer from "./NavigatorsReducer";

const AllReducer = combineReducers({
    nav: NavigatorsReducer,
});

export default AllReducer;