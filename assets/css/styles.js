import { StyleSheet, Dimensions, Image, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const isIphoneX = platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
const is4in = 360;

const logowidth = (width / 2) - 40;

// define color
export const StatusBarColor = "#2FB8FE";


export const backgroundColorBlue = "blue";
export const ColorFFF = "#fff";
export const background2FB8FE = '#2FB8FE';
export const backgroundE93400 = '#2FB8FE';
export const Colorec5c54 = '#ec5c54';
export const ColorED1C24 = '#ED1C24';
export const ColorE9E9EF = '#E9E9EF';
export const Color1C57FB = "#1C57FB";
export const styles = StyleSheet.create({
    flex0: {
        flex: 0,
    },
    flex10: {
        flex: 10,
    },
    flex20: {
        flex: 20,
    },
    flex30: {
        flex: 30,
    },
    flex40: {
        flex: 40,
    },
    flex50: {
        flex: 50,
    },
    flex60: {
        flex: 60,
    },
    flex70: {
        flex: 70,
    },
    flex80: {
        flex: 80,
    },
    flex90: {
        flex: 90,
    },
    flex100: {
        flex: 1,
    },

    justifyContent: {
        justifyContent: 'center'
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
        backgroundColor: ColorFFF,
    },
    homeboximage: {
        justifyContent: "center",
        padding: 20
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
        color: ColorED1C24
    },
    textColor: {
        color: "#333"
    },
    icon_home_deatai: {
        color: background2FB8FE,
        paddingRight: 5,
        marginRight: 10
    },
    text_icon_home_detail_detail: {
        color: "#666",
        fontSize: 13
    },
    text_icon_home_detail: {
        color: background2FB8FE,
        fontSize: 13,
        marginBottom: 5
    },
    font18: {
        fontSize: 18,
    },
    menuHeader: {
        backgroundColor: background2FB8FE,
    },
    backgroundFooter: {
        backgroundColor: ColorE9E9EF,
    },
    footerButton: {
        paddingVertical: isIphoneX ? 25 : 10,
    },
    mHorizontal5: {
        marginHorizontal: 5
    },
    textColorFFF: {
        color: ColorFFF,
    }
});
