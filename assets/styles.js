import { StyleSheet, Dimensions, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
console.log('deviceWidth/2', deviceWidth / 2);
export const headerHight =  Platform === 'ios' ? 70 : 70 - 24;
export const backgroundStatusColor = "#2fa4fe";
export const background = "#2FB8FE";
export const TitleColor = "#fff";
export const TextColor= "#000"

export const styles = StyleSheet.create({
    wrapper : {
        backgroundColor: '#fff', 
        flex: 0
    },
    flex0:{
        flex:0
    },
    flex1:{
        flex:1
    },
    margin_wrapper:{
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        color: background,
        paddingVertical: 5
    },
    //home
    wrapper_silde:{
        height: (deviceWidth / 2) + 20,
        flex: 0
    },
    image_silde:{
        width: deviceWidth,
        height: deviceWidth / 2
    },
    

});