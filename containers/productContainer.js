//react redux
import { connect } from 'react-redux';

//componet
import ProductComponent from "../components/product/productComponent";

// action
import { FetchProductAction, FetchMoreProductAction } from "../actions/actionProduct";

const mapStateToProps = (state) => {
    return {
        product: state.product
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
    }
};
const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
export default ProductContainer;