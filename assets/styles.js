import { StyleSheet, Dimensions, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;

export const headerHight =  Platform === 'ios' ? 70 : 70 - 24;
export const backgroundStatusColor = "#3D6DCC";
export const background = "#2FB8FE";
export const TitleColor = "#fff";
export const TextColor= "#000"
