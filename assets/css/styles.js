import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const logowidth = (width / 2) - 20;
console.log("width:",((width/2) - 20) ); // 360d
console.log("height:",height);
backgroundColorBlue = "blue";
backgroundColorWhite = "#fff";

const styles = StyleSheet.create({
    flex1:{
        flex:1,
    },
    flex3:{
        flex: 3,
    },
    headerBody:{
        alignItems: 'center'
    },
    fontsizemenu:{
        fontSize: 10
    },
    backgroundDefaultMenu:{
        backgroundColor: "#fcfcfc",
    },
    backgroundDeafaultBar:{
        backgroundColor: backgroundColorWhite,
    },
    imagehome:{
        width: logowidth,
        height: logowidth / 2
    } 
});

export default styles;