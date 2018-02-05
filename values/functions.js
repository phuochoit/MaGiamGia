import { isNull } from "lodash";
export function convert_money(number, text){
    // console.log('num',num);
    if (isNull(number) || isNull(text)){
        return '';
    }
    let num = (number + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return num + ' ' + text;
}