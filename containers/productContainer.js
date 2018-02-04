//react redux
import { connect } from 'react-redux';

//componet
import ProductComponent from "../components/product/productComponent";

// action
import { FetchProductAction, FetchMoreProductAction } from "../actions/actionProduct";
import { fetchNetConnected } from "../actions/actionConnected";

const mapStateToProps = (state) => {
    return {
        product: state.product,
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProduct: () => {
            dispatch(FetchProductAction())
        },
        onFetchMoreProduct: (offset) => {
            dispatch(FetchMoreProductAction(offset))
        },
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
    }
};
const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
export default ProductContainer;