import { StyleSheet, Dimensions, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
export const headerHight = Platform === 'ios' ? 70 : 70 - 24;
export const heightNoHeaderAndTab = deviceHeight - (Platform === 'ios' ? 70 : 70 - 24) - 75;
export const backgroundStatusColor = "#2fa4fe";
export const background = "#2FB8FE";
export const TitleColor = "#fff";
export const TextColor = "#000"
export const TextColor2 = "#333";
export const backgroundButton = "#FB8450";

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 0
    },
    flex0: {
        flex: 0
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flex5: {
        flex: 5
    },
    flex6: {
        flex: 6
    },
    flex7: {
        flex: 7
    },
    flex8: {
        flex: 8
    },
    flex9: {
        flex: 9
    },
    pdletf: {
        paddingLeft: 10
    },
    pdright: {
        paddingRight: 10
    },
    mgtop: {
        marginTop: 10
    },
    mghorizontal: {
        marginHorizontal: 10
    },
    margin_wrapper: {
        marginHorizontal: 10
    },
    jcc_aic: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: background,
        paddingVertical: 5
    },
    //home
    wrapper_silde: {
        height: (deviceWidth / 2) + 20,
        flex: 0
    },
    image_silde: {
        width: deviceWidth,
        height: deviceWidth / 2
    },
    // item product
    wrapper_product_item: {
        flexDirection: 'row',
        padding: 10,
        borderColor: '#2FB8FE',
        borderWidth: 2,
        borderStyle: 'solid',
        marginBottom: 10
    },
    box_product_item: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    image_product_item: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    product_txt_pice: {
        color: TextColor2
    },
    product_txt_pice_bold: {
        color: TextColor,
        fontWeight: '500'
    },
    product_txt_title: {
        fontSize: 16,
        fontWeight: '400',
        color: TextColor2
    },
    box_product_bottom: {
        flexDirection: 'row',
        marginTop: 5
    },
    box_product_bottom_button: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    //isConnected
    wrapper_is_connected: {
        backgroundColor: TitleColor
    },
    is_connected_icon: {
        marginBottom: 15
    },
    is_connected_text: {
        marginBottom: 5
    }
});