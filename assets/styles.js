import { StyleSheet, Dimensions, Platform } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
export const categoryBannerHeight = deviceHeight * 0.35;
export const headerHight = Platform === 'ios' ? 70 : 70 - 24;
export const heightNoHeaderAndTab = deviceHeight - (Platform === 'ios' ? 70 : 70 - 24) - 75;
export const backgroundStatusColor = "#2fa4fe";
export const background = "#2FB8FE";
export const backgroundWhite = "#fff";
export const TitleColor = "#fff";
export const TextColor = "#000"
export const TextColor2 = "#333";
export const backgroundButton = "#FB8450";

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1
    },
    deviceHeight: {
        height: deviceHeight
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
    pdall:{
        padding: 10
    },
    pdhorizontal:{
        paddingHorizontal:10
    },
    mgtop: {
        marginTop: 10
    },
    mghorizontal: {
        marginHorizontal: 10
    },
    mgright:{
        marginRight: 10
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
    topProductCurrentlySending:{
        height: (deviceWidth * 0.6) + 20,
    },
    wrapper_silde: {
        height: (deviceWidth * 0.4) + 20,
        flex: 1,
    },
    image_silde: {
        width: deviceWidth,
        height: deviceWidth * 0.4
    },
    button_home_product: {
        borderRadius: 4, 
        paddingHorizontal: 10, 
        justifyContent: 'center',
        height: 30, 
        marginVertical: 5 
    },
    button_product_text:{
        color: "#fff"
    },
    button_home_product_detail: {
        backgroundColor: background
    },
    button_home_product_buy_now: {
        backgroundColor: backgroundButton
    },
    button_box_product_bottom:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    // item product
    wrapper_product_item: {
        flexDirection: 'row',
        padding: 10,
        borderColor: background,
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
        justifyContent: 'flex-end'
    },
    //isConnected
    wrapper_is_connected: {
        backgroundColor: backgroundWhite
    },
    is_connected_icon: {
        marginBottom: 15
    },
    is_connected_text: {
        marginBottom: 5
    },
    //
    coupon_wrapper_items: {
        backgroundColor: backgroundWhite,
        borderColor: background,
        borderWidth: 1,
        borderStyle: 'solid',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        padding: 15,
        marginHorizontal: 5 
    },

    //
    wrapper_coupon_list: { 
        flex: 1, 
        backgroundColor: backgroundWhite,
        borderBottomColor:background
    },
    coupon_list_tabBarUnderlineStyle:{
        backgroundColor: background
    },
    coupon_list_renderTabBar : {
        backgroundColor: backgroundWhite, 
        borderBottomColor: background
    },
    // toast 
    wrapper_toast: { 
        borderRadius: 6, 
        backgroundColor:'rgba(0, 0, 0, 0.7)', 
        paddingHorizontal: 15, 
        paddingVertical:5 
    },
    // coupon list items
    wrapper_coupon_list_items: {
        borderColor: background,
        borderWidth: 1, 
        borderStyle: 'solid', 
        marginBottom: 10
    },
    box_content_coupon_list_items:{
        flexDirection: 'row'
    },
    box_content_left_coupon_list_items: {
        borderColor: backgroundButton, 
        borderWidth: 1, 
        borderStyle: 'solid'
    },
    box_content_coupon_save_left_coupon_list_items: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: TextColor2, 
        textAlign: 'center' 
    },
    box_content_coupon_name_left_coupon_list_items : { 
        backgroundColor: backgroundButton, 
        alignContent: 'center', 
        justifyContent: 'center', 
        flex: 1 
    },
    content_coupon_name_left_coupon_list_items: { 
        paddingVertical: 5, 
        justifyContent: 'center', 
        color: '#fff', 
        textAlign: 'center', 
        paddingHorizontal: 5, 
        fontSize: 12, 
        fontWeight: 'bold' 
    },
    content_text_title_coupon_list_items:{ 
        color: TextColor2, 
        fontSize: 16, 
        marginBottom: 5 
    },
    content_text_name_left_coupon_list_items:{ 
        fontSize: 14, 
        color: TextColor2,
        marginBottom:3
    },
    content_text_name_right_coupon_list_items:{ 
        fontWeight: '500', 
        marginRight: 10 
    },
    bottom_coupon_list_items: { 
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center', 
        backgroundColor: background
    },
    bottom_text_coupon_list_items:{ 
        paddingVertical: 5, 
        justifyContent: 'center', 
        color: backgroundWhite, 
        textAlign: 'center' 
    },
    // empty component
    title_empty: { 
        fontSize: 20, 
        marginVertical: 5, 
        color: TextColor2
    },
    message_empty: { 
        fontSize: 16, 
        color: TextColor2
    },
    // detail coupon
    wrapper_detail_coupon: { 
        flex: 1,
        marginTop: 10, 
        marginHorizontal: 10 
    },
    image_detail_coupon:{
        width: deviceWidth - 20,
        height: (deviceWidth -20) / 2,
        resizeMode: 'contain'    
    },
    footer_detail_coupon: { 
        flex: 0, 
        justifyContent: 'flex-end', 
        marginVertical: 10 
    },
    button_footer_detail_coupon:{ 
        height: 30 
    },
    content_detail_coupon:{ 
        flex: 5, 
        justifyContent: 'center' 
    },
    touchableOpacity_content_detail_coupon: { 
        marginVertical: 5 
    },
    header_detail_coupon: { 
        flex: 0, 
        justifyContent: 'center', 
        marginHorizontal: 5 
    },
    title_header_detail_coupon: { 
        fontSize: 16, 
        color: '#2FB8FE', 
        fontWeight: '400' 
    },
    //category
    containerStyle_category: { 
        marginBottom: 10, 
        justifyContent: 'center' 
    },
    tile_category: { 
        justifyContent: 'center', 
        color: '#fff', 
        fontWeight: '500' 
    }
}); 