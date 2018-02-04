//react redux
import { connect } from 'react-redux';

//componet
import ProductDetailComponent from '../components/product/productDetailComponent';

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
const ProductDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetailComponent);
export default ProductDetailContainer;