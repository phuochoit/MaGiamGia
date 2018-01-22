import { Platform, Dimensions, PixelRatio } from "react-native";
import { background2FB8FE, backgroundE93400 } from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const isIphoneX = platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
const is4in = 360;

export const myThemeFooter = ({
    // FooterTab
    tabBarTextColor: platform === "ios" ? "#fff" : "#fff",
    tabBarTextSize: platform === "ios" ? 14 : is4in === deviceWidth ? 10 : 11,
    activeTab: platform === "ios" ? "#fff" : "#fff",
    sTabBarActiveTextColor: "#fff",
    tabBarActiveTextColor: platform === "ios" ? "#fff" : "#fff",
    tabActiveBgColor: platform === "ios" ? "#fff" : "#fff",
});

