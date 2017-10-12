import { combineReducers } from "redux";
import { DataAPIHOME, DataAPINEWS} from "./fechReducer";

const uri = "https://api-ma-giam-gia.herokuapp.com/";

function Uri(state = uri, action) {
    return state;
}

function getNowDate() {
    const dateObj = new Date();
    const date = {
        'month': dateObj.getUTCMonth() + 1,
        'day': dateObj.getUTCDate(),
        'year': dateObj.getUTCFullYear()
    };

    return date;
}

const appReducer = combineReducers({
    ApiUrl: Uri,
    DataHome: DataAPIHOME,
    DataNews: DataAPINEWS,
    today: getNowDate
});

export default appReducer;