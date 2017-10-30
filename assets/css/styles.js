import { StyleSheet, Dimensions, Image, Platform} from "react-native";
const { width, height } = Dimensions.get("window");
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const isIphoneX = platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
const is4in = 360;

const logowidth = (width / 2) - 40;
export const backgroundColorBlue = "blue";
export const  ColorFFF = "#fff";
export const backgroundF94D1B = '#F94D1B';
export const backgroundE93400 = '#E93400';
export const Colorec5c54 = '#ec5c54';
export const ColorED1C24 = '#ED1C24';
export const ColorE9E9EF = '#E9E9EF';
export const Color1C57FB = "#1C57FB";
export const styles = StyleSheet.create({
    flex0: {
        flex: 0,
    },
    flex1: {
        flex: 1,
    },
    flex3: {
        flex: 3,
    },
    justifyContent:{
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
    homeboximage:{
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
        color: backgroundF94D1B,
        paddingRight: 5,
        marginRight:10
    },
    text_icon_home_detail_detail: {
        color: "#666",
        fontSize: 13
    },
    text_icon_home_detail: {
        color: backgroundF94D1B,
        fontSize: 13,
        marginBottom: 5
    },
    font18: {
        fontSize: 18,
    },
    menuHeader: {
        backgroundColor: backgroundF94D1B,
    },
    backgroundFooter: {
        backgroundColor: ColorE9E9EF,
    },
    footerButton:{
        paddingVertical: isIphoneX ? 25 : 10,
    },
    mHorizontal5: {
        marginHorizontal: 5
    },
    textColorFFF:{
        color: ColorFFF,
    }
});
