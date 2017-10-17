import { combineReducers } from "redux";
// import { DataAPIHOME, DataAPINEWS} from "./fechReducer";

const uri = "https://api-ma-giam-gia.herokuapp.com/";
const uri_web = "https://magiamgia.com/";
function Uri(state = uri, action) {
    return state;
}

function Uri_Web(state = uri_web, action){
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
    WebUrl: Uri_Web,
    today: getNowDate
});

export default appReducer;