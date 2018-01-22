import { TabNavigator } from "react-navigation";

// screen name
import { HOME, COUPON, CATEGORY, HOTPRODUCT, LISTCOUPON } from "../values/screenName";

//component
// import homeComponent from "../components/home/homeComponent";
import HomeContainer from "../containers/homeContainer";
import categoryComponent from "../components/category/categoryComponent";
import couponComponent from "../components/coupon/couponComponent";
import productComponent from "../components/product/productComponent";

export default (AppNavigator = TabNavigator(
    {
        HOME: { screen: HomeContainer },
        COUPON: { screen: couponComponent },
        CATEGORY: { screen: categoryComponent },
        HOTPRODUCT: { screen: productComponent },
    },
    {
        headerMode: "none",
        tabBarPosition: "bottom",
    }
));