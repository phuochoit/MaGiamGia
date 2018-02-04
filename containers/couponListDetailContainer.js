//react redux
import { connect } from 'react-redux';

//componet
import CouponListDetailComponent from '../components/coupon/couponListDetailComponent';

// action
import { fetchNetConnected } from "../actions/actionConnected";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        }
    }
};
const CouponListDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CouponListDetailComponent);
export default CouponListDetailContainer;