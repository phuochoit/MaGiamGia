import { StyleSheet, Dimensions ,Image} from "react-native";

const { width, height } = Dimensions.get("window");
const logowidth = (width / 2) - 20;
// console.log("width:",((width/2) - 20) ); // 360d
// console.log("height:",height);
backgroundColorBlue = "blue";
backgroundColorWhite = "#fff";

const styles = StyleSheet.create({
    flex0: {
        flex: 0,
    },
    flex1: {
        flex: 1,
    },
    flex3: {
        flex: 3,
    },
    headerBody: {
        alignItems: 'center'
    },
    fontsizemenu: {
        fontSize: 10
    },
    backgroundDefaultMenu: {
        backgroundColor: "#fcfcfc",
    },
    backgroundDeafaultBar: {
        backgroundColor: backgroundColorWhite,
    },
    imagehome: {
        width: logowidth,
        height: logowidth / 2,
        resizeMode: Image.resizeMode.contain
    },
    imagefullwidth: {
        width: width,
        height: logowidth / 2,
        resizeMode: Image.resizeMode.contain
    },
    contentCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullwidth: {
        width: width,
        height: null
    },
    tile: {
        color: "#ED1C24"
    },
    textColor: {
        color: "#333"
    },
    icon_home_deatai: {
        color: "#7bb12f",
        fontSize: 17,
        paddingRight: 5
    },
    text_icon_home_detail_detail: {
        color: "#666",
        fontSize: 13
    },
    text_icon_home_detail: {
        color: "#7bb12f",
        fontSize: 13,
        marginBottom: 5
    },
    font18: {
        fontSize: 18,
    }
});

export default styles;