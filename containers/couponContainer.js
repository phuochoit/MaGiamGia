//react redux
import { connect } from 'react-redux';

//componet
import CouponComponent from "../components/coupon/couponComponent";

// action
import { FetchCouponShopAction } from "../actions/actionCouponShop";

const mapStateToProps = (state) => {
    return {
        couponShop: state.couponShop,
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        _onFetchCouponShop: () => {
            dispatch(FetchCouponShopAction())
        }
    }
};
const CouponContainer = connect(mapStateToProps, mapDispatchToProps)(CouponComponent);
export default CouponContainer;